import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './NavigationComponent.module.css';

const NavigationComponent: React.FC<{
    sectionTitles: string[];
    'data-test-id'?: string;
}> = ({ sectionTitles, 'data-test-id': testId }) => {
    const { t } = useTranslation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useRef<HTMLElement>(null);

    const handleClick = (section: string) => {
        if (section === 'profile') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        }
        // Закрываем меню на мобильных после клика
        setIsMenuOpen(false);
    };

    const toggleMenu = () => setIsMenuOpen(prev => !prev);

    // Закрытие меню при клике вне области навигации
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navRef.current && !navRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };
        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Блокировка прокрутки фона при открытом меню на мобильных
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <nav
            ref={navRef}
            className={styles.nav}
            data-test-id={testId}
        >
            <button
                className={styles.burger}
                onClick={toggleMenu}
                aria-label={t('nav.toggleMenu')}
                aria-expanded={isMenuOpen}
                data-test-id="navigation-burger"
            >
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
                <span className={styles.burgerLine}></span>
            </button>

            <ul className={`${styles.navMenu} ${isMenuOpen ? styles.open : ''}`}>
                {sectionTitles.map((section) => (
                    <li key={section} className={styles.navItem}>
                        <button
                            onClick={() => handleClick(section)}
                            className={styles.navButton}
                            data-test-id={`navigation-${section}`}
                        >
                            {t(`nav.${section}`)}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavigationComponent;