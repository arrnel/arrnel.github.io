import {useTranslation} from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

interface HeaderProps {
    onNavigate: (section: 'profile' | 'about' | 'experience' | 'projects' | 'contacts') => void;
}

const Header = ({onNavigate}: HeaderProps) => {
    const {t} = useTranslation();

    return (
        <header id="desktop-nav" className="header">
            <button className="logo" onClick={() => onNavigate('profile')}>{t('profile.fullname')}</button>
            <div className="nav-wrapper">
                <nav>
                    <ul className="nav-menu">
                        <li>
                            <button onClick={() => onNavigate('about')}>{t('nav.about')}</button>
                        </li>
                        <li>
                            <button onClick={() => onNavigate('experience')}>{t('nav.experience')}</button>
                        </li>
                        <li>
                            <button onClick={() => onNavigate('projects')}>{t('nav.projects')}</button>
                        </li>
                        <li>
                            <button onClick={() => onNavigate('contacts')}>{t('nav.contacts')}</button>
                        </li>
                    </ul>
                </nav>
                <span className="controls">
                    <ThemeSwitcher/>
                    <LanguageSwitcher/>
                </span>
            </div>
        </header>
    );
};

export default Header;