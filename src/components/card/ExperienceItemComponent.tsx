import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import type {Experience} from '../../model/Experience.ts';
import styles from './ExperienceItemComponent.module.css'
import ModalComponent from "../modal/base/ModalComponent.tsx";
import ExperienceCardModalComponent from "../modal/ExperienceCardModalComponent.tsx";
import {useAnalytics} from "../../hook/useAnalytics.ts";


const ExperienceItemComponent: React.FC<{ experience: Experience, experienceNumber: number }> = ({
                                                                                                      experience,
                                                                                                      experienceNumber
                                                                                                  }) => {

    const {t} = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    const analytics = useAnalytics();

    const endDate = experience.end_date === 'ongoing'
        ? t('experience.ongoing')
        : experience.end_date;

    const handleSkillClick = (url: string) => {
        window.open(url, '_blank');
    };

    const handleExperienceModalClick = (experienceTitle:string) => {
        setIsOpen(true);
        analytics.openExperienceEvent(experienceTitle)
    };

    return (
        <div className={styles.experienceItem}
             data-test-id={`experience-${experienceNumber}`}
        >
            <div className={styles.experienceInfo}>

                <h3 className={styles.experiencePosition}
                    data-test-id={`experience-${experienceNumber}-position`}
                >
                    {t(experience.position)}
                </h3>

                <p className={styles.experienceCompany}
                   data-test-id={`experience-${experienceNumber}-company`}
                >
                    {t(experience.company)}
                </p>
                <p className={styles.experienceDate}
                   data-test-id={`experience-${experienceNumber}-date`}
                >
                    {experience.start_date} - {endDate}
                </p>
                <p className={styles.experienceShortDescription}
                   data-test-id={`experience-${experienceNumber}-description`}
                >
                    {t(experience.short_description)}
                </p>
            </div>
            <div className={styles.skillsContainer}>
                {
                    experience.skills.map((skill) => (
                        <button
                            key={skill.id}
                            className={styles.skillButton}
                            data-test-id={`experience-${experienceNumber}-skill-${skill.title.replaceAll(" ", "_").toLowerCase()}`}
                            onClick={() => handleSkillClick(skill.url)}
                        >
                            <img
                                className={styles.skillIcon}
                                src={skill.image}
                                alt={t(skill.title) + " icon"}
                            />
                            <h4>{t(skill.title)}</h4>
                        </button>
                    ))}
            </div>
            <button className={styles.moreButton} onClick={() => handleExperienceModalClick(experience.id)}>
                    {t('buttons.more')}
            </button>
            <ModalComponent
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                className={styles.experienceModal}
            >
                <ExperienceCardModalComponent description={experience.description}/>
            </ModalComponent>
        </div>
    );
};

export default ExperienceItemComponent;