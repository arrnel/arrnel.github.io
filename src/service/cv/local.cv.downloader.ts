import {BaseFileDownloader} from "./base.file-downloader.ts";
import i18n from "i18next";

export class LocalFileDownloader extends BaseFileDownloader{

    PROVIDER_TITLE = 'LOCAL';

    async checkAvailability(url: string): Promise<void> {

        try {
            const response = await fetch(url, { method: 'HEAD' });
            if (!response.ok) {
                throw new Error(`File not accessible at: ${url}. Status: ${response.status}`);
            }
        } catch (error) {
            throw new Error(
                `File not accessible at  ${url}. ${error instanceof Error ? error.message : String(error)}`
            );
        }
    }

    getCvUrlForCurrentProviderAndLang() {
        const lang = i18n.language;
        return `/assets/cv/cv_${lang}.pdf`;
    }

}