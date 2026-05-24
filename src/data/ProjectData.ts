import type {Project} from "../model/Project.ts";
import {FormatTranslateCode} from "../model/ModifiedText.ts";

const VITE_REPO_OWNER = import.meta.env.VITE_REPO_OWNER;
const VITE_REPO_ROCOCO = import.meta.env.VITE_REPO_ROCOCO;
const VITE_REPO_BANK = import.meta.env.VITE_REPO_BANK;
const VITE_REPO_AE = import.meta.env.VITE_REPO_AE;
const VITE_REPO_AE_PY = import.meta.env.VITE_REPO_AE_PY;
export const PROJECTS_DATA: Project[] = [
    {
        title: 'projects.project_info.0.title',
        short_description: 'projects.project_info.0.short_description',
        description: new FormatTranslateCode('projects.project_info.0.description'),
        skills: [
            {
                "title": "projects.buttons.github",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_ROCOCO}`,
            },
            {
                "title": "projects.buttons.allure-reports",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_ROCOCO}`,
            },
            {
                "title": "projects.buttons.allure-report-example",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_ROCOCO}/...`,
            },
            {
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
        title: 'projects.project_info.1.title',
        short_description: 'projects.project_info.1.short_description',
        description: new FormatTranslateCode('projects.project_info.1.description'),
        skills: [
            {
                "title": "projects.buttons.github",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_BANK}`
            },
            {
                "title": "projects.buttons.allure-reports",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_BANK}`
            },
            {
                "title": "projects.buttons.allure-report-example",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_BANK}/...`
            },
            {
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
        title: 'projects.project_info.2.title',
        short_description: 'projects.project_info.2.short_description',
        description: new FormatTranslateCode('projects.project_info.2.description'),
        skills: [
            {
                "title": "projects.buttons.github",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_AE}`,
            },
            {
                "title": "projects.buttons.site",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE}`,
            },
            {
                "title": "projects.buttons.allure-reports",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE}`,
            },
            {
                "title": "projects.buttons.allure-report-example",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE}/...`,
            },
            {
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
        title: 'projects.project_info.3.title',
        short_description: 'projects.project_info.3.short_description',
        description: new FormatTranslateCode('projects.project_info.3.description'),
        skills: [
            {
                "title": "projects.buttons.github",
                "url": `https://github.com/${VITE_REPO_OWNER}/${VITE_REPO_AE_PY}`,
            },
            {
                "title": "projects.buttons.site",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE_PY}`,
            },
            {
                "title": "projects.buttons.allure-reports",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE_PY}`,
            },
            {
                "title": "projects.buttons.allure-report-example",
                "url": `https://${VITE_REPO_OWNER}.github.io/${VITE_REPO_AE_PY}/...`,
            },
            {
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