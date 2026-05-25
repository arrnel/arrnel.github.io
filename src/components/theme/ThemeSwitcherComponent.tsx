import {useTranslation} from "react-i18next";
import {useTheme} from '../../context/ThemeContext.tsx';
import styles from './ThemeSwitcherComponent.module.css'

const ThemeSwitcherComponent: React.FC = () => {

    const repoName = import.meta.env.VITE_REPO_RESUME;
    const {t} = useTranslation();
    const {isDark, toggleTheme} = useTheme();

    const theme_type = isDark
        ? "dark"
        : "light";
    const icon = `${repoName}/assets/${theme_type}_theme.svg`;
    const alt_code = "theme." + theme_type;

    return (

        <div className={styles.themeSwitcherWrapper}>

            <button
                className={`button icon ${styles.themeSwitcher}`}
                data-test-id="theme-switcher"
                onClick={toggleTheme}
            >
                <img
                    className="icon"
                    src={repoName + icon}
                    alt={t(alt_code)}
                />

            </button>

        </div>

    );
};

export default ThemeSwitcherComponent;