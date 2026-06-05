import type {AnalyticsService} from "../service/analytics/analytics.types.ts";
import {getAnalyticsProvider} from "../service/analytics/analytics.factory.ts";

export function useAnalytics(): AnalyticsService {
    return getAnalyticsProvider();
}