import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import {renderToString} from 'react-dom/server';
import React from 'react';
import {useTextTransform} from '../../hook/useTextTransform.tsx';
import {MarkdownTranslateCode} from '../../model/ModifiedText.ts';
import styles from './MarkdownComponent.module.css'
import rehypeExternalLinks from "rehype-external-links";

export const MarkdownComponent: React.FC<{
    content: MarkdownTranslateCode;
    dataTestId: string;
}> = ({content, dataTestId}) => {

    const transformText = useTextTransform();
    return (
        <div className={styles.markdownContainer}
             data-test-id={dataTestId}
        >
            <Markdown remarkPlugins={[remarkGfm, remarkToc]}
                rehypePlugins={[[rehypeExternalLinks, {target: '_blank'}]]}
            >{
                renderToString(transformText(content))
            }
            </Markdown>
        </div>
    );

}