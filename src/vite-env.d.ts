interface ImportMetaEnv {
    readonly VITE_REPO_OWNER: string;
    readonly VITE_REPO_ROCOCO: string;
    readonly VITE_REPO_BANK: string;
    readonly VITE_REPO_AE: string;
    readonly VITE_REPO_AE_PY: string;
    readonly VITE_REPO_RESUME: string;
    readonly VITE_SOCIAL_TELEGRAM: string;
    readonly VITE_SOCIAL_LINKEDIN: string;
    readonly VITE_SOCIAL_EMAIL: string;
    readonly VITE_ANALYTICS_DEBUG: boolean;
    readonly VITE_ANALYTICS_PROVIDER: string;
    readonly VITE_GTM_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}