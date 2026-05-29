declare global {
    var dataLayer: unknown[];

    var gtag:
        | ((...args: unknown[]) => void)
        | undefined;
}

export function initializeGoogleAnalytics(
    measurementId: string,
): void {
    if (!measurementId) {
        throw new Error(
            'Google Analytics measurement id is missing',
        );
    }

    const script =
        document.createElement('script');

    script.async = true;

    script.src =
        `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

    document.head.appendChild(script);

    globalThis.dataLayer =
        globalThis.dataLayer || [];

    globalThis.gtag = function (
        ...args: unknown[]
    ) {
        globalThis.dataLayer.push(args);
    };

    globalThis.gtag('js', new Date());

    globalThis.gtag(
        'config',
        measurementId,
    );
}