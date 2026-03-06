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

export const useTextTransform = () => {
    const { t } = useTranslation();

    return (text: ModifiedText): string | ReactNode => {

        if (text instanceof TranslateCode) {
            return t(text.value);
        } else if (text instanceof FormatTranslateCode) {
            return parse(t(text.value));
        } else if (text instanceof MarkdownTranslateCode) {
            return renderToString(parse(t(text.value))).replaceAll(/(?<=\n\n)(?![*-])\n/gi, "&nbsp;\n ");
        } else {
            throw new TypeError("Unknown instance of text variable: " + text.getSimpleName());
        }
    };
};