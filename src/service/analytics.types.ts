export interface AnalyticsService {

    changeLanguageEvent(lang: string): void;

    viewSectionEvent(section: string): void;

    downloadCvEvent(lang: string): void;

    openExperienceEvent(experienceTitle: string): void;

    openProjectEvent(projectTitle: string): void;

    navigateByProjectLinkEvent(projectTitle: string, linkType: string): void;

    viewProjectCarouselEvent(projectTitle: string): void;

    navigateByProfileContactEvent(contactTitle: string): void;

    navigateByContactEvent(contactTitle: string): void;

}