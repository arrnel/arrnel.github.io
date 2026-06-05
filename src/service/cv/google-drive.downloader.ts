import { BaseFileDownloader } from './base.file-downloader.ts';
import i18n from "i18next";

export class GoogleDriveDownloader extends BaseFileDownloader {

    PROVIDER_TITLE = 'GOOGLE';

    async checkAvailability(url: string): Promise<void> {

        try {
            const response = await fetch(url, { method: 'HEAD' });
            if (!response.ok) {
                throw new Error(
                    `File not accessible at ${url}: status ${response.status} ${response.statusText}. ` +
                    `Ensure the file is publicly available and the URL is correct.`
                );
            }
        } catch (error) {
            throw new Error(
                `Cannot reach file at ${url}. ${error instanceof Error ? error.message : String(error)}`
            );
        }
    }

    getCvUrlForCurrentProviderAndLang(): string {
        const lang = i18n.language;
        const varName = `VITE_CV_URL_${this.PROVIDER_TITLE}_${lang}`.toUpperCase();
        const url = import.meta.env[varName];
        if (!url) {
            throw new Error(`Environment variable ${varName} is not set or empty`);
        }
        return url;
    }

}