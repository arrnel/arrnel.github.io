import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

interface ProfileSectionProps {
  onNavigate: (section: 'about' | 'experience' | 'projects' | 'contacts') => void;
}

const ProfileSection = forwardRef<HTMLElement, ProfileSectionProps>(({ onNavigate }, ref) => {
  const { t } = useTranslation();

  const handleContactClick = () => {
    onNavigate('contacts');
  };

  const handleDownloadCV = () => {
    window.open('/assets/cv.pdf', '_blank');
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <section ref={ref} className="section profile-section">
      <div className="section__pic-container">
        <img
            src="/assets/profile.png"
            alt={t('profile.name')}
            width="400px"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">{t('profile.greetings')}</p>
        <h1 className="title">{t('profile.fullname')}</h1>
        <h3 className="section__text__h3">{t('profile.position')}</h3>
        <div className="btn-container">
          <button
            id="cv-btn"
            className="btn profile-button btn-color-1"
            onClick={handleDownloadCV}
          >
            {t('profile.buttons.cv')}
          </button>
          <button
            className="btn profile-button btn-color-2"
            onClick={handleContactClick}
          >
            {t('profile.buttons.contact')}
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/assets/telegram.svg"
            alt="Telegram"
            className="icon"
            onClick={() => handleSocialClick('https://t.me/arrnel')}
          />
          <img
            src="/assets/linkedin.svg"
            alt="LinkedIn"
            className="icon"
            onClick={() => handleSocialClick('https://linkedin.com/')}
          />
          <img
            src="/assets/github.svg"
            alt="Github"
            className="icon"
            onClick={() => handleSocialClick('https://github.com/arrnel')}
          />
        </div>
      </div>
    </section>
  );
});

export default ProfileSection;