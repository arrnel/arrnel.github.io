import {useTranslation} from 'react-i18next';
import AboutDetailComponent from "../about/AboutDetailComponent.tsx";
import type {About} from "../../model/About.ts";
import styles from './AboutSectionContent.module.css'
import {useTextTransform} from "../../hook/useTextTransform.tsx";


const AboutSectionContent: React.FC<{
    about: About;
}> = ({about}) => {
    const {t} = useTranslation();
    const transformText = useTextTransform();
    return (
        <div className={`sectionContentContainer ${styles.aboutSectionContentWrapper}`}>
            <div className={styles.aboutImageContainer}>
                <img src={about.image}
                     alt="About image"
                     className={styles.aboutPic}
                />
            </div>
            <div className={styles.aboutInfo}>
                <div className={styles.aboutDetailContainers}>
                    {
                        about.details.map((detail, idx) => (
                            <AboutDetailComponent
                                key={idx}
                                icon={detail.image}
                                title={t(detail.title)}
                                description={transformText(detail.description)}
                            />
                        ))
                    }
                </div>
                <div className="text-container">
                    <p>{t(about.summary)}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSectionContent;