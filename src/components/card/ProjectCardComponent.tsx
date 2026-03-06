import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import type {Project} from '../../model/Project.ts';
import ModalComponent from "../modal/base/ModalComponent.tsx";
import ProjectModalComponent from "../modal/ProjectModalComponent.tsx";
import styles from "./ProjectCardComponent.module.css";

const ProjectCardComponent: React.FC<{ project: Project }> = ({project}) => {
    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.projectCard}>
                <h3 className={styles.projectTitle}>{t(project.title)}</h3>
                <p>{t(project.short_description)}</p>
                <img src={project.images[0]} alt={t(project.title)}/>
                <button className={styles.moreButton} onClick={() => setIsOpen(true)}>
                    {t('buttons.more')}
                </button>
            </div>
            <ModalComponent
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            >
                <ProjectModalComponent project={project}/>
            </ModalComponent>
        </>
    );
};

export default ProjectCardComponent;
