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
            code: import.meta.env.VITE_GOOGLE_ANALYTICS_ID,
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
            section,
        });
    }

    downloadCvEvent(lang: string): void {
        this.sendEvent(ANALYTIC_EVENT.DOWNLOAD_CV, {
            language: lang,
        });
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
            linkType: linkType
        });
    }

    viewProjectCarouselEvent(projectTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.VIEW_PROJECT_CAROUSEL, {
            project_title: projectTitle,
        });
    }

    navigateByContactEvent(contactTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_CONTACT_LINK, {
            contact_title: contactTitle,
        });
    }
}