import {useTranslation} from 'react-i18next';
import styles from './NavigationComponent.module.css';

const NavigationComponent: React.FC<{
    sectionTitles: string[];
    'data-test-id'?: string;
}> = ({ sectionTitles, 'data-test-id': testId }) => {
    const { t } = useTranslation();

    const handleClick = (section: string) => {
        if (section === 'profile') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            document.getElementById(section)?.scrollIntoView({
                behavior: 'smooth',
            });
        }
    };

    return (
        <nav className={styles.nav}
            data-test-id={testId}
        >
            <ul className={styles.navMenu}>
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