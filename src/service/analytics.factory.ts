import type {AnalyticsService} from "./analytics.types.ts";
import {ANALYTICS_PROVIDERS} from "./analytics.provider.ts";
import {GoogleAnalyticsProvider} from "./google_analytics.provider.ts";
import {NoneAnalyticsProvider} from "./none_analytics.provider.ts";
import {initializeGoogleAnalytics} from "../sdk/google.sdk.ts";

export class AnalyticsFactory {
    static create(): AnalyticsService {
        const provider =
            import.meta.env.VITE_ANALYTICS_PROVIDER;

        switch (provider) {
            case ANALYTICS_PROVIDERS.GOOGLE_ANALYTICS_PROVIDER: {
                const measurementId =
                    import.meta.env
                        .VITE_GOOGLE_ANALYTICS_ID;

                initializeGoogleAnalytics(
                    measurementId,
                );

                return new GoogleAnalyticsProvider();
            }

            default:
                return new NoneAnalyticsProvider();
        }
    }
}