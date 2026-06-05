import {getDownloadCvProvider} from "../service/cv/cv.factory.ts";
import type {BaseFileDownloader} from "../service/cv/base.file-downloader.ts";

export function useCvDownloader(): BaseFileDownloader {
    return getDownloadCvProvider();
}