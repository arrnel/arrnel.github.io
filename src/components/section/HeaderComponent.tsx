import {useTranslation} from 'react-i18next';
import LanguageSelectComponent from '../language/LanguageSelectComponent.tsx';
import ThemeSwitcherComponent from '../theme/ThemeSwitcherComponent.tsx';
import NavigationComponent from "../navigation/NavigationComponent.tsx";
import styles from "./HeaderComponent.module.css"
import React from "react";

const HeaderComponent: React.FC<{
    sections: string[];
}> = ({ sections }) => {
    const { t } = useTranslation();

    return (
        <header id="desktop-nav" className={styles.header}>
            <button data-test-id="logo" className={styles.logo}>
                {t('profile.fullname')}
            </button>

            <div className={styles.navContainer}>
                <NavigationComponent
                    data-test-id="header-nav"
                    sectionTitles={sections}
                />
                <span data-test-id="header-controls" className={styles.controlsContainer}>
                    <ThemeSwitcherComponent />
                    <LanguageSelectComponent />
                </span>
            </div>
        </header>
    );
};

export default HeaderComponent;