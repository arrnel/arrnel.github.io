import type {AnalyticsService} from "./analytics.types.ts";
import {ANALYTIC_EVENT} from "./analytics.events.ts";
import ReactGA from "react-ga4";

export class GoogleAnalyticsProvider implements AnalyticsService {
    constructor() {
        const measurementId = import.meta.env.VITE_GA4_ID;
        if (!measurementId) {
            console.warn(
                'GA4 measurement ID (VITE_GA4_ID) is not defined. Analytics will not be initialized.'
            );
            return;
        }

        ReactGA.initialize(measurementId, {
            gaOptions: {
                cookieDomain: import.meta.env.DEV ? 'none' : 'auto',
            },
        });
    }

    // private sendEvent(event: string, params?: Record<string, unknown>): void {
    //     console.log("[GA] sendEvent:", event, params);
    //     params ??= {};
    //     params["cookie_domain"] = "none";
    //     params["cookie_flags"] = "SameSite=None;Secure";
    //     ReactGA.gtag("event", event, params);
    // }
    //
    // changeLanguageEvent(lang: string): void {
    //     this.sendEvent(ANALYTIC_EVENT.CHANGE_LANGUAGE, {
    //         language: lang,
    //     });
    // }
    //
    // viewSectionEvent(section: string): void {
    //     this.sendEvent(ANALYTIC_EVENT.VIEW_SECTION, {
    //         section: {
    //             viewed_sections: {
    //                 [section]: true,
    //             },
    //         },
    //     });
    // }
    //
    // downloadCvEvent(lang: string): void {
    //     this.sendEvent(ANALYTIC_EVENT.DOWNLOAD_CV, {
    //         section: {
    //             profile: {
    //                 download_cv: lang,
    //             },
    //         },
    //     });
    // }
    //
    // openExperienceEvent(experienceTitle: string): void {
    //     this.sendEvent(ANALYTIC_EVENT.OPEN_EXPERIENCE, {
    //         section: {
    //             [Section.EXPERIENCE]: {
    //                 [experienceTitle]: {
    //                     viewed: true,
    //                 },
    //             },
    //         },
    //     });
    // }
    //
    // openProjectEvent(projectTitle: string): void {
    //     this.sendEvent(ANALYTIC_EVENT.OPEN_PROJECT, {
    //         section: {
    //             [Section.PROJECTS]: {
    //                 [projectTitle]: {
    //                     viewed: true,
    //                 },
    //             },
    //         },
    //     });
    // }
    //
    // navigateByProjectLinkEvent(projectTitle: string, linkType: string): void {
    //     this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_PROJECT_LINK, {
    //         section: {
    //             projects: {
    //                 [projectTitle]: {
    //                     links: {
    //                         [linkType]: true,
    //                     },
    //                 },
    //             },
    //         },
    //     });
    // }
    //
    // viewProjectCarouselEvent(projectTitle: string): void {
    //     this.sendEvent(ANALYTIC_EVENT.VIEW_PROJECT_CAROUSEL, {
    //         section: {
    //             projects: {
    //                 [projectTitle]: {
    //                     carousel: true,
    //                 },
    //             },
    //         },
    //     });
    // }
    //
    // navigateByProfileContactEvent(contactTitle: string): void {
    //     this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_HEADER_CONTACT_LINK, {
    //         section: {
    //             profile: {
    //                 contact: {
    //                     [contactTitle]: true,
    //                 },
    //             },
    //         },
    //     });
    // }
    //
    // navigateByContactEvent(contactTitle: string): void {
    //     this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_CONTACT_LINK, {
    //         section: {
    //             contacts: {
    //                 contact: {
    //                     [contactTitle]: true,
    //                 },
    //             },
    //         },
    //     });
    // }

    private sendEvent(eventName: string, params?: Record<string, any>) {
        if (!ReactGA.isInitialized) {
            console.warn('ReactGA is not initialized. Event not sent:', eventName);
            return;
        }
        ReactGA.event(eventName, params);
    }

    changeLanguageEvent(lang: string): void {
        this.sendEvent(ANALYTIC_EVENT.CHANGE_LANGUAGE, { language: lang });
    }

    viewSectionEvent(section: string): void {
        this.sendEvent(ANALYTIC_EVENT.VIEW_SECTION, { section });
    }

    downloadCvEvent(lang: string): void {
        this.sendEvent(ANALYTIC_EVENT.DOWNLOAD_CV, { language: lang });
    }

    openExperienceEvent(experienceTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.OPEN_EXPERIENCE, {
            experience_title: experienceTitle,
        });
    }

    openProjectEvent(projectTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.OPEN_PROJECT, {
            project_title: projectTitle,
        });
    }

    navigateByProjectLinkEvent(projectTitle: string, linkType: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_PROJECT_LINK, {
            project_title: projectTitle,
            link_type: linkType,
        });
    }

    viewProjectCarouselEvent(projectTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.VIEW_PROJECT_CAROUSEL, {
            project_title: projectTitle,
        });
    }

    navigateByProfileContactEvent(contactTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_HEADER_CONTACT_LINK, {
            contact_title: contactTitle,
        });
    }

    navigateByContactEvent(contactTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_CONTACT_LINK, {
            contact_title: contactTitle,
        });
    }

}
