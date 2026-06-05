import type {AnalyticsService} from "./analytics.types.ts";
import {GoogleAnalyticsProvider} from "./google.analytics.provider.ts";
import {NoneAnalyticsProvider} from "./none.analytics.provider.ts";
import {ANALYTIC_PROVIDER} from "./analytics.provider.ts";

const providerEnv = import.meta.env.VITE_ANALYTICS_PROVIDER;

let analyticsProvider: AnalyticsService;

function createProvider(): AnalyticsService {
    switch (providerEnv) {
        case ANALYTIC_PROVIDER.GOOGLE_ANALYTICS_PROVIDER: {
            return new GoogleAnalyticsProvider();
        }
        case ANALYTIC_PROVIDER.NONE:
        default:
            return new NoneAnalyticsProvider();
    }
}

export function initAnalytics(): void {
    analyticsProvider = createProvider();
}

export function getAnalyticsProvider(): AnalyticsService {
    if (!analyticsProvider) {
        throw new Error(
            'Analytics provider is not initialized. Call initAnalytics() first.'
        );
    }
    return analyticsProvider;
}