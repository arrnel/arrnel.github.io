import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import type {Project} from '../../model/Project.ts';
import styles from './ProjectModalComponent.module.css'
import {MarkdownComponent} from "../markdown/MarkdownComponent.tsx";
import ImageSliderComponent from "../slider/ImageSliderComponent.tsx";
import {useAnalytics} from "../../hook/useAnalytics.ts";

interface ProjectModalContentProps {
    project: Project;
}

const HorizontalIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="7" width="7" height="10" rx="1" fill="aim"/>
            <rect x="14" y="7" width="7" height="10" rx="1"/>
        </svg>
    );

    const VerticalIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="7" y="3" width="10" height="7" rx="1"/>
            <rect x="7" y="14" width="10" height="7" rx="1"/>
        </svg>
    );

const ProjectModalComponent: React.FC<ProjectModalContentProps> = ({ project }) => {

    const { t } = useTranslation();
    const analytics = useAnalytics();
    const [layout, setLayout] = useState<'horizontal' | 'vertical'>('horizontal');

    let projectTitleComponent = <></>;
    if (project.title?.trim()) {
        projectTitleComponent = <h1 className={styles.projectTitle}>{t(project.title)}</h1>;
    }

    const isHorizontal = layout === 'horizontal';

    const contentClass = isHorizontal ? styles.projectModalContent : styles.verticalProjectModalContent;
    const infoClass = isHorizontal ? styles.projectFormInfo : styles.verticalProjectFormInfo;
    const buttonsClass = isHorizontal ? styles.projectFormButtonsContainer : styles.verticalProjectFormButtonsContainer;
    const descriptionClass = isHorizontal ? styles.projectFormDescriptionContainer : styles.verticalProjectFormDescriptionContainer;

    const aspectRatio = isHorizontal ? '1 / 1' : undefined;

    const toggleLayout = () => {
        setLayout(prev => (prev === 'horizontal' ? 'vertical' : 'horizontal'));
    };

    const handleProjectLinkClick = (projectTitle: string, link_type: string, url: string) => {
        analytics.navigateByProjectLinkEvent(projectTitle, link_type)
        window.open(url, '_blank');
    };

    return (
        <div className={styles.projectModalContainer}>
            {projectTitleComponent}

            <div className={styles.layoutSwitcher} onClick={toggleLayout}>
                <div className={`${styles.switchOption} ${isHorizontal ? styles.switchOptionActive : ''}`}>
                    <HorizontalIcon />
                </div>
                <div className={`${styles.switchOption} ${!isHorizontal ? styles.switchOptionActive : ''}`}>
                    <VerticalIcon />
                </div>
            </div>

            <div className={contentClass} data-test-id="project-modal-form">
                <div className={infoClass}>
                    <div className={styles.imageSliderContainer}>
                        <ImageSliderComponent
                            title={t(project.title)}
                            images={project.images}
                            aspectRatio={aspectRatio}
                            data-test-id="project-modal-slider"
                        />
                    </div>

                    <div className={buttonsClass} data-test-id="project-buttons-container">
                        {project.links.map((link) => (
                            <button key={link.link_type}
                                    className={styles.projectButton}
                                    data-test-id={link.title.replaceAll(".", "-").toLowerCase()}
                                    onClick={() => handleProjectLinkClick(project.id, link.link_type, link.url)}
                            >
                                {t(link.title)}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={descriptionClass}>
                    <MarkdownComponent
                        content={project.description}
                        dataTestId="project-modal-content"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProjectModalComponent;