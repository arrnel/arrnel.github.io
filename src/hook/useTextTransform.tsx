import {useTranslation} from 'react-i18next';
import type {ReactNode} from 'react';
import {
    TranslateCode,
    FormatTranslateCode,
    MarkdownTranslateCode,
    type ModifiedText,
} from '../model/ModifiedText.ts';
import parse from 'html-react-parser';
import {renderToString} from "react-dom/server";

const viteReplacements = {
    VITE_REPO_OWNER: import.meta.env.VITE_REPO_OWNER,
    VITE_REPO_ROCOCO: import.meta.env.VITE_REPO_ROCOCO,
    VITE_REPO_BANK: import.meta.env.VITE_REPO_BANK,
    VITE_REPO_AE: import.meta.env.VITE_REPO_AE,
    VITE_REPO_AE_PY: import.meta.env.VITE_REPO_AE_PY,
    VITE_REPO_AE_RESUME: import.meta.env.VITE_REPO_RESUME,
    VITE_SOCIAL_TELEGRAM: import.meta.env.VITE_SOCIAL_TELEGRAM,
    VITE_SOCIAL_LINKEDIN: import.meta.env.VITE_SOCIAL_LINKEDIN,
    VITE_SOCIAL_EMAIL: import.meta.env.VITE_SOCIAL_EMAIL,
};

export const useTextTransform = () => {
    const {t} = useTranslation();

    return (text: ModifiedText): string | ReactNode => {

        if (text instanceof TranslateCode) {
            return t(text.value);
        } else if (text instanceof FormatTranslateCode) {
            return parse(t(text.value));
        } else if (text instanceof MarkdownTranslateCode) {
            return renderToString(parse(t(text.value)));
        } else {
            throw new TypeError("Unknown instance of text variable: " + text.getSimpleName());
        }
    };
};

export const useTextTransformWithReplacements = () => {
    const {t} = useTranslation();

    return (text: ModifiedText, replacements: Record<string, string>): string | ReactNode => {
        let translated = t(text.value);

        for (const [key, value] of Object.entries(replacements)) {
            translated = translated.replaceAll('${' + key + '}', value);
        }

        if (text instanceof TranslateCode) {
            return translated;
        } else if (text instanceof FormatTranslateCode) {
            return parse(translated);
        } else if (text instanceof MarkdownTranslateCode) {
            return renderToString(parse(translated));
        } else {
            throw new TypeError(
                'Unknown instance of text variable: ' + text.getSimpleName()
            );
        }
    };
};

export const useViteEnvReplacements = () => {
    const {t} = useTranslation();

    return (text: ModifiedText): string | ReactNode => {
        let translated = t(text.value);

        for (const [key, value] of Object.entries(viteReplacements)) {
            translated = translated.replaceAll('${' + key + '}', value);
        }

        if (text instanceof TranslateCode) {
            return translated;
        } else if (text instanceof FormatTranslateCode) {
            return parse(translated);
        } else if (text instanceof MarkdownTranslateCode) {
            return renderToString(parse(translated));
        } else {
            throw new TypeError(
                'Unknown instance of text variable: ' + text.getSimpleName()
            );
        }
    };
};