import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import type {Project} from "../data/types/Project.ts";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <>
      <div className="project-card">
        {project.images.length > 0 && <img src={project.images[0]} alt={t(project.title)} />}
        <p>{t(project.short_description)}</p>
        <button onClick={openModal}>{t('buttons.more')}</button>
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>{t('buttons.close')}</button>
            <h2>{t(project.title)}</h2>
            <p>{t(project.description)}</p>
            {project.links.map((link, idx) => (
              <a key={idx} href={link.url}>{t(link.title)}</a>
            ))}
            {project.images.length > 0 && (
              <div className="slider">
                <img src={project.images[currentImageIndex]} alt={`${t(project.title)} image ${currentImageIndex + 1}`} />
                <button onClick={prevImage}>Prev</button>
                <button onClick={nextImage}>Next</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;