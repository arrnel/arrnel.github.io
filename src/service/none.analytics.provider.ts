import type {AnalyticsService} from "./analytics.types.ts";

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export class NoneAnalyticsProvider implements AnalyticsService {
    changeLanguageEvent(_lang: string) { return; }
    viewSectionEvent(_section: string) { return; }
    downloadCvEvent(_lang: string) { return; }
    openExperienceEvent(_experienceTitle: string) { return; }
    openProjectEvent(_projectTitle: string) { return; }
    navigateByProjectLinkEvent(_projectTitle: string, _linkType: string) { return; }
    viewProjectCarouselEvent(_projectTitle: string) { return; }
    navigateByHeaderContactEvent(_contactTitle: string) { return; }
    navigateByContactEvent(_contactTitle: string) { return; }
}