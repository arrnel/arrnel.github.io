import type {AnalyticsService} from "./analytics.types.ts";
import {ANALYTIC_EVENT} from "./analytics.events.ts";
import {ReactTagManager} from "react-gtm-ts";

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export class GoogleAnalyticsProvider implements AnalyticsService {

    constructor() {
        ReactTagManager.init({
            code: import.meta.env.VITE_GTM_ID,
            debug: false,
            performance: false,
        });
    }

    private sendEvent(
        event: string,
        params?: Record<string, unknown>,
    ): void {
        console.log(
            '[GA] sendEvent:',
            event,
            params,
        );

        ReactTagManager.action({
            event: event,
            params: params,
        })
    }

    changeLanguageEvent(lang: string): void {
        this.sendEvent(ANALYTIC_EVENT.CHANGE_LANGUAGE, {
            language: lang,
        });
    }

    viewSectionEvent(section: string): void {
        this.sendEvent(ANALYTIC_EVENT.VIEW_SECTION, {
            section: {
                [section]: {
                    viewed: true,
                }
            }
        });
    }

    downloadCvEvent(lang: string): void {
        this.sendEvent(ANALYTIC_EVENT.DOWNLOAD_CV, {
            section: {
                profile: {
                    download_cv: lang,
                }
            }
        });
    }

    openExperienceEvent(experienceTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.OPEN_EXPERIENCE, {
            section: {
                experience: {
                    [experienceTitle]: {
                        viewed: true,
                    }
                }
            }
        });
    }

    openProjectEvent(projectTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.OPEN_PROJECT, {
            section: {
                project: {
                    [projectTitle]: {
                        viewed: true,
                    }
                }
            }
        });
    }

    navigateByProjectLinkEvent(projectTitle: string, linkType: string): void {

        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_PROJECT_LINK, {
            section: {
                project: {
                    [projectTitle]: {
                        [linkType]: true,
                    }
                }
            }
        });
    }

    viewProjectCarouselEvent(projectTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.VIEW_PROJECT_CAROUSEL, {
            section: {
                project: {
                    [projectTitle]: {
                        carousel: true,
                    }
                }
            }
        })
    }

    navigateByProfileContactEvent(contactTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_HEADER_CONTACT_LINK, {
            section: {
                profile: {
                    contact: {
                        [contactTitle]: true
                    }
                }
            }
        });
    }

    navigateByContactEvent(contactTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_CONTACT_LINK, {
            section: {
                contacts: {
                    contact: {
                        [contactTitle]: true
                    }
                }
            }
        });
    }

}