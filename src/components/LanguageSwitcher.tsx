import React from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '../i18n';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(e) => changeLanguage(e.target.value)}
    >
      <option value="en">Eng</option>
      <option value="ru">Рус</option>
    </select>
  );
};

export default LanguageSwitcher;