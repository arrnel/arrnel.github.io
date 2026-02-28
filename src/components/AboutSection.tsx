import {forwardRef} from 'react';
import {useTranslation} from 'react-i18next';
import AboutDetail from "./AboutDetail.tsx";

const AboutSection = forwardRef<HTMLElement>((_, ref) => {
    const {t} = useTranslation();

    return (
        <section ref={ref} className="section about-section">
            <p className="section__text__p1" data-translate="about.description">{t('about.description')}</p>
            <h1 className="title" data-translate="about.title">{t('nav.about')}</h1>
            <div className="section-container">
                <div className="section__pic-container">
                    <img src="/assets/about-pic.png"
                         alt="Profile picture"
                         className="about-pic"
                    />
                </div>
                <div className="about-details-container">
                    <div className="about-containers">
                        <AboutDetail
                            icon="/assets/icon/experience.png"
                            title={t('about.experience.title')}
                            description={t('about.experience.description')}
                        />
                        <AboutDetail
                            icon= "/assets/icon/education.png"
                            title={t('about.education.title')}
                            description={t('about.education.description')}
                        />
                    </div>
                    <div className="text-container">
                        <p data-translate="about.summary">Более 3-х лет опыта работы в области тестирования электронных
                            закупок. Имею опыт в ручном тестировании и автоматизации UI, API, а также опыт настройки
                            процессов в CI/CD. Люблю смотреть видео с конференций тестирования. Хочу и готов получать
                            новый опыт и знания.</p>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default AboutSection;