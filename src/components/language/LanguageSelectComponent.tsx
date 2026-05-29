import React from 'react';
import i18n, {changeLanguage} from '../../i18n.ts';
import styles from './LanguageSwitcher.module.css';
import {useAnalytics} from "../../hook/useAnalytics.ts";

const LanguageSelectComponent: React.FC = () => {

    const analytics = useAnalytics();

    const handleChangeLanguage = (e: string) => {
        changeLanguage(e);
        const lang = i18n.language;
        analytics.changeLanguageEvent(lang);
    };

    const currentLang = i18n.language;

    const languages = {
        en: 'ENG',
        ru: 'РУС',
    };

    return (
        <div className={styles.languageSelectWrapper}>
            <select
                name="language-select"
                value={currentLang}
                onChange={(e) => handleChangeLanguage(e.target.value)}
                className={styles.select}
                data-test-id="language-select"
            >
                {Object.entries(languages).map(([key, label]) => (
                    <option key={key} value={key}>
                        {label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelectComponent;