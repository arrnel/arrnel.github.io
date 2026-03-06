import React from 'react';
import { changeLanguage } from '../../i18n.ts';
import styles from './LanguageSwitcher.module.css';
import {useCurrentLanguage} from "../../hook/useCurrentLanguage.ts";

const LanguageSelectComponent: React.FC = () => {

  const currentLang = useCurrentLanguage();

  const languages = {
    en: 'ENG',
    ru: 'РУС',
  };

  return (
    <div className={styles.languageSelectWrapper}>
      <select
        name="language-select"
        value={currentLang}
        onChange={(e) => changeLanguage(e.target.value)}
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