import React from 'react';
import {useTranslation} from 'react-i18next';
import type {Experience} from "../data/types/Experience.ts";

const ExperienceItem: React.FC<{ experience: Experience }> = ({experience}) => {
    const {t} = useTranslation();
    const endDate = experience.end_date === 'ongoing'
        ? t('date.ongoing')
        : experience.end_date;

    return (
        <div className="experience-item">
            <div className="experience-info">
                <h3>{t(experience.title)}</h3>
                <p>{t(experience.description)}</p>
                <p>{experience.start_date} - {endDate}</p>
            </div>
            <div className="article-container">
                {experience.image_link.map((image_link, idx) => (
                    <article className="skill-icon-container" key={idx}>
                        <img
                            className="skill-icon"
                            src={image_link.image}
                            alt={t(image_link.title) + " icon"}
                        />
                        <div>
                            <h4>{t(image_link.title)}</h4>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default ExperienceItem;