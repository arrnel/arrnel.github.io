import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import type {Project} from '../../model/Project.ts';
import ModalComponent from "../modal/base/ModalComponent.tsx";
import styles from "./ProjectCardComponent.module.css";
import ProjectModalComponent from "../modal/ProjectModalComponent.tsx";

const ProjectCardComponent: React.FC<{ project: Project }> = ({project}) => {

    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.projectCard}>
                <h3 className={styles.projectTitle}>{t(project.title)}</h3>
                <p>{t(project.short_description)}</p>
                <img src={project.logo} alt={t(project.title)}/>
                <button className={styles.moreButton} onClick={() => setIsOpen(true)}>
                    {t('buttons.more')}
                </button>
            </div>
            <ModalComponent
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                className={styles.projectCardModal}
            >
                <ProjectModalComponent project={project}/>
            </ModalComponent>
        </>
    );
};

export default ProjectCardComponent;
