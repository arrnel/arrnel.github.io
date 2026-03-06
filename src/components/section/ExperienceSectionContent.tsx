import ExperienceItemComponent from "../card/ExperienceItemComponent.tsx";
import type {Experience} from "../../model/Experience.ts";
import styles from './ExperienceSectionContent.module.css'

const ExperienceSectionContent: React.FC<{
    experiences: Experience[];
}> = ({experiences}) => {
    return (
        <div className={`sectionContentContainer ${styles.experienceSectionContentContainer}`}>
            <div className={styles.experiencesContainer}>
                {experiences.map((experience, idx) => (
                    <ExperienceItemComponent
                        key={idx}
                        experience={experience}
                        experienceNumber={idx}
                    />
                ))}
            </div>
        </div>
    );
};

export default ExperienceSectionContent;