import type {Project} from "../model/Project.ts";
import {FormatTranslateCode} from "../model/ModifiedText.ts";

const VITE_REPO_OWNER = import.meta.env.VITE_REPO_OWNER;
const VITE_REPO_ROCOCO = import.meta.env.VITE_REPO_ROCOCO;
const VITE_REPO_BANK = import.meta.env.VITE_REPO_BANK;
const VITE_REPO_AE = import.meta.env.VITE_REPO_AE;
const VITE_REPO_AE_PY = import.meta.env.VITE_REPO_AE_PY;
export const PROJECTS_DATA: Project[] = [
    {
        id: `Project [${VITE_REPO_ROCOCO}] card`,
        title: 'projects.project_info.0.title',
        short_description: 'projects.project_info.0.short_description',
        description: new FormatTranslateCode('projects.project_info.0.description'),
        links: [
            {
                "id": `Project [${VITE_REPO_ROCOCO}] repo`,
                "title": "projects.buttons.github",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_ROCOCO}`,
            },
            {
                "id": `Project [${VITE_REPO_ROCOCO}] Allure Report Hub`,
                "title": "projects.buttons.allure-reports",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_ROCOCO}`,
            },
            {
                "id": `Project [${VITE_REPO_ROCOCO}] Allure Report Example`,
                "title": "projects.buttons.allure-report-example",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_ROCOCO}/...`,
            },
            {
                "id": `Project [${VITE_REPO_ROCOCO}] GitHub Actions List`,
                "title": "projects.buttons.github-actions",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_ROCOCO}/actions`,
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
        id: `Project [${VITE_REPO_BANK}] card`,
        title: 'projects.project_info.1.title',
        short_description: 'projects.project_info.1.short_description',
        description: new FormatTranslateCode('projects.project_info.1.description'),
        links: [
            {
                "id": `Project [${VITE_REPO_BANK}] repo`,
                "title": "projects.buttons.github",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_BANK}`
            },
            {
                "id": `Project [${VITE_REPO_BANK}] Allure Report Hub`,
                "title": "projects.buttons.allure-reports",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_BANK}`
            },
            {
                "id": `Project [${VITE_REPO_BANK}] Allure Report Example`,
                "title": "projects.buttons.allure-report-example",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_BANK}/...`
            },
            {
                "id": `Project [${VITE_REPO_BANK}] GitHub Actions List`,
                "title": "projects.buttons.github-actions",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_BANK}/actions`,
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
        id: `Project [${VITE_REPO_AE}] card`,
        title: 'projects.project_info.2.title',
        short_description: 'projects.project_info.2.short_description',
        description: new FormatTranslateCode('projects.project_info.2.description'),
        links: [
            {
                "id": `Project [${VITE_REPO_AE}] repo`,
                "title": "projects.buttons.github",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_AE}`,
            },
            {
                "id": `Project [${VITE_REPO_AE}] site`,
                "title": "projects.buttons.site",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE}`,
            },
            {
                "id": `Project [${VITE_REPO_AE}] Allure Report Hub`,
                "title": "projects.buttons.allure-reports",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE}`,
            },
            {
                "id": `Project [${VITE_REPO_AE}] Allure Report Example`,
                "title": "projects.buttons.allure-report-example",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE}/...`,
            },
            {
                "id": `Project [${VITE_REPO_AE}] GitHub Actions List`,
                "title": "projects.buttons.github-actions",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_AE}/actions`,
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
        id: `Project [${VITE_REPO_AE_PY}] card`,
        title: 'projects.project_info.3.title',
        short_description: 'projects.project_info.3.short_description',
        description: new FormatTranslateCode('projects.project_info.3.description'),
        links: [
            {
                "id": `Project [${VITE_REPO_AE_PY}] repo`,
                "title": "projects.buttons.github",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_AE_PY}`,
            },
            {
                "id": `Project [${VITE_REPO_AE_PY}] site`,
                "title": "projects.buttons.site",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE_PY}`,
            },
            {
                "id": `Project [${VITE_REPO_AE_PY}] Allure Report Hub`,
                "title": "projects.buttons.allure-reports",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE_PY}`,
            },
            {
                "id": `Project [${VITE_REPO_AE_PY}] Allure Report Example`,
                "title": "projects.buttons.allure-report-example",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE_PY}/...`,
            },
            {
                "id": `Project [${VITE_REPO_AE_PY}] GitHub Actions List`,
                "title": "projects.buttons.github-actions",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_OWNER}/actions`,
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