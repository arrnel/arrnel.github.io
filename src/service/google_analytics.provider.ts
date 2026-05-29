import type {AnalyticsService} from "./analytics.types.ts";
import {ANALYTIC_EVENT} from "./analytics.events.ts";

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export class GoogleAnalyticsProvider implements AnalyticsService {
    private sendEvent(event: string, params?: Record<string, unknown>): void {
        if (!window.gtag) {
            return;
        }

        window.gtag('event', event, params);
    }

    changeLanguageEvent(lang: string): void {
        this.sendEvent(ANALYTIC_EVENT.LANGUAGE_CHANGE, {
            language: lang,
        });
    }

    viewSectionEvent(section: string): void {
        this.sendEvent(ANALYTIC_EVENT.SECTION_VIEW, {
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

    navigateByProjectLinkEvent(projectTitle: string, linkType:string): void {
        this.sendEvent(ANALYTIC_EVENT.NAVIGATE_BY_PROJECT_LINK, {
            project_title: projectTitle,
            linkType: linkType
        });
    }

    viewProjectCarouselEvent(projectTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.PROJECT_CAROUSEL_VIEW, {
            project_title: projectTitle,
        });
    }

    navigateByContactEvent(contactTitle: string): void {
        this.sendEvent(ANALYTIC_EVENT.CONTACT_NAVIGATION, {
            contact_title: contactTitle,
        });
    }
}