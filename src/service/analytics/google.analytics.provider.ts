import type { AnalyticsService } from "./analytics.types.ts";
import { ANALYTIC_EVENT } from "./analytics.events.ts";
import ReactGA from "react-ga4";
import { Section } from "../../model/Section.ts";

export class GoogleAnalyticsProvider implements AnalyticsService {
    constructor() {
        ReactGA.initialize(import.meta.env.VITE_GA4_ID);
    }

    private sendEvent(event: string, params?: Record<string, unknown>): void {
        console.log("[GA] sendEvent:", event, params);

        ReactGA.gtag("event", event, params);
    }

    changeLanguageEvent(lang: string): void {
        this.sendEvent(ANALYTIC_EVENT.CHANGE_LANGUAGE, {
            language: lang,
        });
    }

    viewSectionEvent(section: string): void {
        this.sendEvent(ANALYTIC_EVENT.VIEW_SECTION, {
            section: {
                viewed_sections: {
                    [section]: true,
                },
            },
        });
    }

    downloadCvEvent(lang: string): void {
        this.sendEvent(ANALYTIC_EVENT.DOWNLOAD_CV, {
            section: {
                profile: {
                    download_cv: lang,
                },
            },
        });
    }

    openExperienceEvent(experienceTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.OPEN_EXPERIENCE, {
            section: {
                [Section.EXPERIENCE]: {
                    [experienceTitle]: {
                        viewed: true,
                    },
                },
            },
        });
    }

    openProjectEvent(projectTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.OPEN_PROJECT, {
            section: {
                [Section.PROJECTS]: {
                    [projectTitle]: {
                        viewed: true,
                    },
                },
            },
        });
    }

    navigateByProjectLinkEvent(projectTitle: string, linkType: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_PROJECT_LINK, {
            section: {
                projects: {
                    [projectTitle]: {
                        links: {
                            [linkType]: true,
                        },
                    },
                },
            },
        });
    }

    viewProjectCarouselEvent(projectTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.VIEW_PROJECT_CAROUSEL, {
            section: {
                projects: {
                    [projectTitle]: {
                        carousel: true,
                    },
                },
            },
        });
    }

    navigateByProfileContactEvent(contactTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_HEADER_CONTACT_LINK, {
            section: {
                profile: {
                    contact: {
                        [contactTitle]: true,
                    },
                },
            },
        });
    }

    navigateByContactEvent(contactTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_CONTACT_LINK, {
            section: {
                contacts: {
                    contact: {
                        [contactTitle]: true,
                    },
                },
            },
        });
    }
}