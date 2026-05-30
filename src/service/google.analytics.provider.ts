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
            viewed_sections: [section],
        });
    }

    downloadCvEvent(lang: string): void {
        this.sendEvent(ANALYTIC_EVENT.DOWNLOAD_CV, {
            downloaded_cv: [lang],
        });
    }

    openExperienceEvent(experienceTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.OPEN_EXPERIENCE, {
            viewed_experiences: [experienceTitle],
        });
    }

    openProjectEvent(projectTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.OPEN_PROJECT, {
            viewed_projects: [projectTitle],
        });
    }

    navigateByProjectLinkEvent(projectTitle: string, linkType: string): void {

        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_PROJECT_LINK, {
            navigate_by_project_link: {
                [projectTitle]: [
                    linkType,
                ]
            }
        });
    }

    viewProjectCarouselEvent(projectTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.VIEW_PROJECT_CAROUSEL, {
            viewed_project_carousel_slides:
                [projectTitle],
        })
    }

    navigateByHeaderContactEvent(contactTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_HEADER_CONTACT_LINK, {
            header_contacts: [contactTitle],
        });
    }

    navigateByContactEvent(contactTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_CONTACT_LINK, {
            contact: [contactTitle],
        });
    }

}