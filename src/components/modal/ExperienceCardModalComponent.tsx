import React from 'react';
import styles from './ExperienceCardModalComponent.module.css'
import {MarkdownComponent} from "../markdown/MarkdownComponent.tsx";
import {MarkdownTranslateCode} from "../../model/ModifiedText.ts";

interface ExperienceCardContentProps {
    description: MarkdownTranslateCode;
}

const ExperienceCardModalComponent: React.FC<ExperienceCardContentProps> = ({description}) => {

    let projectTitleComponent = <></>;

    return (
        <div className={styles.projectModalContainer}>
            {projectTitleComponent}
            <MarkdownComponent
                content={description}
                dataTestId="project-modal-content"
            />
        </div>
    );
};

export default ExperienceCardModalComponent;