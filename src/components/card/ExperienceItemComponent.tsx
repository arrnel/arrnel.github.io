import React from 'react';
import {useTranslation} from 'react-i18next';
import type {Experience} from '../../model/Experience.ts';
import styles from './ExperienceItemComponent.module.css'


const ExperienceItemComponent: React.FC<{ experience: Experience, experienceNumber: number }> = ({
                                                                                                      experience,
                                                                                                      experienceNumber
                                                                                                  }) => {

    const {t} = useTranslation();

    const endDate = experience.end_date === 'ongoing'
        ? t('experience.ongoing')
        : experience.end_date;

    const handleSkillClick = (url: string) => {
        window.open(url, '_blank');
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
                <p className={styles.experienceDescription}
                   data-test-id={`experience-${experienceNumber}-description`}
                >
                    {t(experience.description)}
                </p>
            </div>
            <div className={styles.skillsContainer}>
                {
                    experience.skills.map((skill, idx) => (
                        <button
                            key={idx}
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
        </div>
    );
};

export default ExperienceItemComponent;