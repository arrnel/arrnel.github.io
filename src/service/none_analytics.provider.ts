import type {AnalyticsService} from "./analytics.types.ts";

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export class NoneAnalyticsProvider implements AnalyticsService {

    changeLanguageEvent(): void { return; }

    viewSectionEvent(): void { return; }

    downloadCvEvent(): void { return; }

    openExperienceEvent(): void { return; }

    openProjectEvent(): void { return; }

    navigateByProjectLinkEvent(): void { return; }

    viewProjectCarouselEvent(): void { return; }

    navigateByContactEvent(): void { return; }

}