import type {Project} from "../model/Project.ts";
import {FormatTranslateCode} from "../model/ModifiedText.ts";

const VITE_REPO_OWNER = import.meta.env.VITE_REPO_OWNER;
const VITE_REPO_ROCOCO = import.meta.env.VITE_REPO_ROCOCO;
const VITE_REPO_BANK = import.meta.env.VITE_REPO_BANK;
const VITE_REPO_AE = import.meta.env.VITE_REPO_AE;
const VITE_REPO_AE_PY = import.meta.env.VITE_REPO_AE_PY;
const VITE_ROCOCO_REPORT_EXAMPLE = import.meta.env.VITE_ROCOCO_EXAMPLE;
const VITE_BANK_REPORT_EXAMPLE = import.meta.env.VITE_BANK_REPORT_EXAMPLE;
const VITE_AE_REPORT_EXAMPLE = import.meta.env.VITE_AE_REPORT_EXAMPLE;
const VITE_AE_PY_REPORT_EXAMPLE = import.meta.env.VITE_AE_PY_REPORT_EXAMPLE;

// Translation codes
const TC_SITE = "projects.buttons.site";
const TC_GITHUB = "projects.buttons.github";
const TC_TEST_RUNS = "projects.buttons.allure-reports";
const TC_REPORT_EXAMPLE = "projects.buttons.allure-report-example";
const TC_GHA = "projects.buttons.github-actions";

// Link types
const LT_REPO = "repo";
const LT_SITE = "site";
const LT_TEST_RUNS = "test-runs";
const LT_REPORT_EXAMPLE = "report-example";
const LT_GHA = "github-actions";

export const PROJECTS_DATA: Project[] = [
    {
        id: VITE_REPO_ROCOCO,
        title: 'projects.project_info.0.title',
        short_description: 'projects.project_info.0.short_description',
        description: new FormatTranslateCode('projects.project_info.0.description'),
        links: [
            {
                link_type: LT_REPO,
                title: TC_GITHUB,
                url: `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_ROCOCO}`,
            },
            {
                link_type: LT_TEST_RUNS,
                title: TC_TEST_RUNS,
                url: `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_ROCOCO}`,
            },
            {
                link_type: LT_REPORT_EXAMPLE,
                title: TC_REPORT_EXAMPLE,
                url: `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_ROCOCO}/${VITE_ROCOCO_REPORT_EXAMPLE}`,
            },
            {
                link_type: LT_GHA,
                title: TC_GHA,
                url: `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_ROCOCO}/actions`,
            },
        ],
        logo: "/assets/project/rococo/logo.png",
        images: [
            "/assets/project/rococo/site.png",
            "/assets/project/rococo/github_actions.png",
            "/assets/project/rococo/test_runs.png",
            "/assets/project/rococo/allure_report_example.png",
            "/assets/project/rococo/pull_request_message.png",
        ],
    },
    {
        id: VITE_REPO_BANK,
        title: 'projects.project_info.1.title',
        short_description: 'projects.project_info.1.short_description',
        description: new FormatTranslateCode('projects.project_info.1.description'),
        links: [
            {
                link_type: LT_REPO,
                title: TC_GITHUB,
                url: `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_BANK}`
            },
            {
                link_type: LT_TEST_RUNS,
                title: TC_TEST_RUNS,
                url: `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_BANK}`
            },
            {
                link_type: LT_REPORT_EXAMPLE,
                title: TC_REPORT_EXAMPLE,
                url: `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_BANK}/${VITE_BANK_REPORT_EXAMPLE}`
            },
            {
                link_type: LT_GHA,
                title: TC_GHA,
                url: `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_BANK}/actions`,
            },
        ],
        logo: "/assets/project/bank/logo.png",
        images: [
            "/assets/project/bank/spring_backend_app.png",
            "/assets/project/bank/github_actions.png",
            "/assets/project/bank/test_runs.png",
            "/assets/project/bank/allure_report_example.png",
            "/assets/project/bank/pull_request_message.png",
        ],
    },
    {
        id: VITE_REPO_AE,
        title: 'projects.project_info.2.title',
        short_description: 'projects.project_info.2.short_description',
        description: new FormatTranslateCode('projects.project_info.2.description'),
        links: [
            {
                link_type: LT_REPO,
                title: TC_GITHUB,
                url: `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_AE}`,
            },
            {
                link_type: LT_SITE,
                title: TC_SITE,
                url: `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE}`,
            },
            {
                link_type: LT_TEST_RUNS,
                title: TC_TEST_RUNS,
                url: `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE}`,
            },
            {
                link_type: LT_REPORT_EXAMPLE,
                title: TC_REPORT_EXAMPLE,
                url: `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE}/${VITE_AE_REPORT_EXAMPLE}`,
            },
            {
                link_type: LT_GHA,
                title: TC_GHA,
                url: `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_AE}/actions`,
            },
        ],
        logo: "/assets/project/automation-exercise/logo.png",
        images: [
            "/assets/project/automation-exercise/site.png",
            "/assets/project/automation-exercise/github_actions.png",
            "/assets/project/automation-exercise/test_runs.png",
            "/assets/project/automation-exercise/allure_report_example.png",
            "/assets/project/automation-exercise/pull_request_message.png",
        ],
    },
    {
        id: VITE_REPO_AE_PY,
        title: 'projects.project_info.3.title',
        short_description: 'projects.project_info.3.short_description',
        description: new FormatTranslateCode('projects.project_info.3.description'),
        links: [
            {
                link_type: LT_REPO,
                title: TC_GITHUB,
                url: `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_AE_PY}`,
            },
            {
                link_type: LT_SITE,
                title: TC_SITE,
                url: `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE_PY}`,
            },
            {
                link_type: LT_TEST_RUNS,
                title: TC_TEST_RUNS,
                url: `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE_PY}`,
            },
            {
                link_type: LT_REPORT_EXAMPLE,
                title: TC_REPORT_EXAMPLE,
                url: `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE_PY}/${VITE_AE_PY_REPORT_EXAMPLE}`,
            },
            {
                link_type: LT_GHA,
                title: TC_GHA,
                url: `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_OWNER}/actions`,
            },
        ],
        logo: "/assets/project/automation-exercise-py/logo.png",
        images: [
            "/assets/project/automation-exercise-py/site.png",
            "/assets/project/automation-exercise-py/github_actions.png",
            "/assets/project/automation-exercise-py/test_runs.png",
            "/assets/project/automation-exercise-py/allure_report_example.png",
            "/assets/project/automation-exercise-py/pull_request_message.png",
        ],
    }
];