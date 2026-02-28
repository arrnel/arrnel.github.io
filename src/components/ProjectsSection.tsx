import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../data/projects';
import ProjectCard from "./ProjectCard.tsx";

const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <section ref={ref} className="section projects-section">
      <h2>{t('projects_title')}</h2>
      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
});

export default ProjectsSection;