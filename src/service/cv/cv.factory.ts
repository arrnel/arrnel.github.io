import {LocalFileDownloader} from "./local.cv.downloader.ts";
import {GoogleDriveDownloader} from "./google-drive.downloader.ts";
import type {BaseFileDownloader} from "./base.file-downloader.ts";

const providerEnv = (import.meta.env.VITE_DOWNLOAD_CV_PROVIDER).toLowerCase();
let downloadCvProvider: BaseFileDownloader;

export const CV_DOWNLOADER_TYPE = {
    LOCAL: 'local',
    GOOGLE: 'google',
} as const;

function createProvider(): BaseFileDownloader {
    switch (providerEnv) {
        case CV_DOWNLOADER_TYPE.LOCAL: {
            return new LocalFileDownloader();
        }
        case CV_DOWNLOADER_TYPE.GOOGLE: {
            return new GoogleDriveDownloader();
        }
        default:
            return new GoogleDriveDownloader();
    }
}

export function initDownloadCv(): void {
    downloadCvProvider = createProvider();
}

export function getDownloadCvProvider(): BaseFileDownloader {
    if (!downloadCvProvider) {
        throw new Error(
            'Download cv provider is not initialized. Call initDownloadCv() first.'
        );
    }
    return downloadCvProvider;
}