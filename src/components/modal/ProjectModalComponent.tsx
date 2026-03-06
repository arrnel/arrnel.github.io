import React from 'react';
import {useTranslation} from 'react-i18next';
import ImageSliderComponent from '../slider/ImageSliderComponent.tsx';
import type {Project} from '../../model/Project.ts';
import styles from './ProjectModalComponent.module.css'
import {MarkdownComponent} from "../markdown/MarkdownComponent.tsx";

interface ProjectModalContentProps {
    project: Project;
}

const ProjectModalComponent: React.FC<ProjectModalContentProps> = ({project}) => {

    const {t} = useTranslation();

    let projectTitleComponent = <></>
    if (project.title != null && project.title.trim() !== '') {
        projectTitleComponent = <h1 className={styles.projectTitle}>{t(project.title)}</h1>
    }

    return (
        <div className={styles.projectModalContainer}>

            {projectTitleComponent}

            <div className={styles.projectModalContent}
                 data-test-id="project-modal-form"
            >

                <div className={styles.projectFormInfo}>
                    <div className={styles.imageSliderContainer}>
                        <ImageSliderComponent
                            projectTitleKey={project.title}
                            images={project.images}
                            data-test-id="project-modal-slider"
                        />
                    </div>

                    <div className={styles.projectFormButtonsContainer}
                         data-test-id="project-buttons-container"
                    >
                        {project.skills.map((skill, idx) => (

                            <a key={idx}
                               href={skill.url}
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                <div className={styles.projectButton}
                                     data-test-id={skill.title.replaceAll(".", "-").toLowerCase()}
                                >
                                    {t(skill.title)}
                                </div>
                            </a>

                        ))}
                    </div>
                </div>

                <div className={styles.projectFormDescriptionContainer}>
                    <MarkdownComponent content={project.description}
                                       dataTestId="project-modal-content"
                    />
                </div>

            </div>

        </div>
    );
};

export default ProjectModalComponent;