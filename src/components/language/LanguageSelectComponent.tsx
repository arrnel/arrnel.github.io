import React, { useState, useRef, useEffect, useCallback } from 'react';
import i18n, { changeLanguage } from '../../i18n.ts';
import styles from './LanguageSwitcher.module.css';
import { useAnalytics } from '../../hook/useAnalytics.ts';

const languages = {
    en: 'ENG',
    ru: 'РУС',
} as const;

type LangKey = keyof typeof languages;

const LanguageSelectComponent: React.FC = () => {
    const analytics = useAnalytics();
    const [isOpen, setIsOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);

    const currentLang = i18n.language as LangKey;

    const handleToggle = () => setIsOpen(prev => !prev);

    const handleSelect = useCallback(
        (lang: LangKey) => {
            changeLanguage(lang);
            analytics.changeLanguageEvent(lang);
            setIsOpen(false);
        },
        [analytics],
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false);
        };
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    const handleListKeyDown = (e: React.KeyboardEvent<HTMLUListElement>) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
            buttonRef.current?.focus();
            return;
        }
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            e.preventDefault();
            const items = Array.from(listRef.current?.querySelectorAll<HTMLLIElement>('[role="option"]') ?? []);
            const currentIndex = items.findIndex(item => item.getAttribute('aria-selected') === 'true');
            let nextIndex: number;
            if (e.key === 'ArrowDown') {
                nextIndex = (currentIndex + 1) % items.length;
            } else {
                nextIndex = (currentIndex - 1 + items.length) % items.length;
            }
            items[nextIndex]?.focus();
            return;
        }
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const focused = document.activeElement as HTMLLIElement | null;
            const lang = focused?.dataset.lang as LangKey | null;
            if (lang) handleSelect(lang);
        }
    };

    return (
        <div
            className={styles.languageSelectWrapper}
            ref={wrapperRef}
            data-test-id="language-select-wrapper"
        >
            <button
                ref={buttonRef}
                type="button"
                className={styles.selectButton}
                onClick={handleToggle}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                data-test-id="language-select"
            >
                <span>{languages[currentLang]}</span>
                <span className={styles.arrow} aria-hidden="true" />
            </button>

            {isOpen && (
                <ul
                    ref={listRef}
                    role="listbox"
                    className={styles.optionsList}
                    onKeyDown={handleListKeyDown}
                    aria-label="Select language"
                >
                    {(Object.entries(languages) as [LangKey, string][]).map(([lang, label]) => (
                        <li
                            key={lang}
                            role="option"
                            aria-selected={lang === currentLang}
                            data-lang={lang}
                            className={`${styles.option} ${lang === currentLang ? styles.optionSelected : ''}`}
                            onClick={() => handleSelect(lang)}
                            tabIndex={-1}
                        >
                            {label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelectComponent;