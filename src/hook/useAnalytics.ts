import type {AnalyticsService} from "../service/analytics.types.ts";
import {getAnalyticsProvider} from "../service/analytics.factory.ts";

export function useAnalytics(): AnalyticsService {
    return getAnalyticsProvider();
}