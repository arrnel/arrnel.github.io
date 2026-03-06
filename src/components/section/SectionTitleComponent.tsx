import React from "react";
import styles from "./SectionTitleComponent.module.css"

const SectionTitleComponent: React.FC<{ title: string, description: string }> = ({title, description}) => {
    return (
        <div className={styles.sectionTitleContainer}>
            <p className={styles.sectionDescription}>{description}</p>
            <h1 className={styles.sectionTitle}>{title}</h1>
        </div>
    )

};

export default SectionTitleComponent;