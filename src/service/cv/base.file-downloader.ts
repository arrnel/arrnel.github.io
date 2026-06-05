export abstract class BaseFileDownloader {

    protected abstract PROVIDER_TITLE: string;

    protected abstract checkAvailability(url: string): Promise<void>;

    protected abstract getCvUrlForCurrentProviderAndLang(): string;

    async navigateToDownloadFilePage(): Promise<void> {
        try {
            const url = this.getCvUrlForCurrentProviderAndLang();
            await this.checkAvailability(url);
            window.open(url, '_blank');
        } catch (error) {
            console.error('Download error:', error);
            throw error;
        }
    }

}