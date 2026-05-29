import {useTranslation} from 'react-i18next';
import styles from './ProfileSectionContent.module.css';
import type {Profile} from "../../model/Profile.ts";
import {Section} from "../../model/Section.ts";
import i18n from "../../i18n.ts";
import {useAnalytics} from "../../hook/useAnalytics.ts";

const ProfileSectionContent: React.FC<{
    profile: Profile;
}> = ({ profile }) => {

    const { t } = useTranslation();
    const lang = i18n.language;

    const analytics = useAnalytics();

    const handleNavigateToContactsClick = () => {
        document.getElementById(Section.CONTACTS)?.scrollIntoView({
            behavior: 'smooth',
        });
    };

    const handleDownloadCV = () => {
        window.open(`/assets/cv/cv_${lang}.pdf`, '_blank');
        analytics.downloadCvEvent(lang);
    };

    const handleContactClick = (contactId: string, url: string) => {
        window.open(url, '_blank');
        analytics.navigateByContactEvent(contactId);
    };

    return (
        <div className={styles.profileContentContainer}>
            {/* Profile Image */}
            <div className={styles.profileImageContainer}>
                <img
                    src={profile.image.image}
                    alt={t(profile.image.title)}
                    data-test-id="profile-image"
                />
            </div>

            {/* Profile Data */}
            <div className={styles.profileData}>
                <p className={styles.greeting} data-test-id="profile-greetings">
                    {t('profile.greetings')}
                </p>
                <h1 className={styles.fullName} data-test-id="profile-fullname">
                    {t('profile.fullname')}
                </h1>
                <h3 className={styles.position} data-test-id="profile-position">
                    {t('profile.position')}
                </h3>

                {/* Buttons */}
                <div className={styles.profileButtonContainer}>
                    <button
                        id={styles.cvBtn}
                        className={`btn ${styles.profileButton} ${styles.btn1}`}
                        data-test-id="download-cv"
                        onClick={handleDownloadCV}
                    >
                        {t('profile.buttons.cv')}
                    </button>
                    <button
                        className={`btn ${styles.profileButton} ${styles.btn2}`}
                        data-test-id="contact-nav"
                        onClick={handleNavigateToContactsClick}
                    >
                        {t('profile.buttons.contact')}
                    </button>
                </div>

                {/* Socials */}
                <div className={styles.socialButtonContainer}>
                    {profile.socials.map((contact) => (
                        <button
                            key={contact.id}
                            className={`btn ${styles.socialButtonContainer}`}
                            onClick={() => handleContactClick(contact.id, contact.url)}
                        >
                            <img
                                src={contact.image}
                                alt={`${contact.title} icon`}
                                className="icon"
                                data-test-id={`social-button-${contact.title}`}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileSectionContent;