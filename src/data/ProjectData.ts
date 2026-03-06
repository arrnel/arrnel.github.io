import type {Project} from "../model/Project.ts";
import {FormatTranslateCode} from "../model/ModifiedText.ts";

export const PROJECTS_DATA: Project[] = [
    {
        title: 'projects.project_info.0.title',
        short_description: 'projects.project_info.0.short_description',
        description: new FormatTranslateCode('projects.project_info.0.description'),
        skills: [
            {
                "title": "projects.buttons.github",
                "url": "https://github.com/arrnel/rococo"
            },
            {
                "title": "projects.buttons.allure-reports",
                "url": "https://arrnel.github.io/rococo"
            },
            {
                "title": "projects.buttons.allure-report-example",
                "url": "https://arrnel.github.io/rococo/..."
            },
            {
                "title": "projects.buttons.github-actions",
                "url": "https://github.com/arrnel/rococo/actions"
            }
        ],
        images: [
            "/assets/project/rococo/logo.png",
            "/assets/project/rococo/rococo1.png"
        ],
    },
    {
        title: 'projects.project_info.1.title',
        short_description: 'projects.project_info.1.short_description',
        description: new FormatTranslateCode('projects.project_info.1.description'),
        skills: [
            {
                "title": "projects.buttons.github",
                "url": "https://github.com/arrnel/bank"
            },
            {
                "title": "projects.buttons.allure-reports",
                "url": "https://arrnel.github.io/bank"
            },
            {
                "title": "projects.buttons.allure-report-example",
                "url": "https://arrnel.github.io/bank/..."
            },
            {
                "title": "projects.buttons.github-actions",
                "url": "https://github.com/arrnel/bank/actions"
            }
        ],
        images: [
        ],
    },
    {
        title: 'projects.project_info.2.title',
        short_description: 'projects.project_info.2.short_description',
        description: new FormatTranslateCode('projects.project_info.2.description'),
        skills: [
            {
                "title": "projects.buttons.github",
                "url": "https://github.com/arrnel/automation-exercise"
            },
            {
                "title": "projects.buttons.site",
                "url": "https://arrnel.github.io/automation-exercise-py"
            },
            {
                "title": "projects.buttons.allure-reports",
                "url": "https://arrnel.github.io/automation-exercise"
            },
            {
                "title": "projects.buttons.allure-report-example",
                "url": "https://arrnel.github.io/automation-exercise/..."
            },
            {
                "title": "projects.buttons.github-actions",
                "url": "https://github.com/arrnel/automation-exercise/actions"
            }
        ],
        images: [

        ],
    },
    {
        title: 'projects.project_info.3.title',
        short_description: 'projects.project_info.3.short_description',
        description: new FormatTranslateCode('projects.project_info.3.description'),
        skills: [
            {
                "title": "projects.buttons.github",
                "url": "https://github.com/arrnel/automation-exercise-py"
            },
            {
                "title": "projects.buttons.site",
                "url": "https://arrnel.github.io/automation-exercise-py"
            },
            {
                "title": "projects.buttons.allure-reports",
                "url": "https://arrnel.github.io/automation-exercise-py"
            },
            {
                "title": "projects.buttons.allure-report-example",
                "url": "https://arrnel.github.io/automation-exercise-py/..."
            },
            {
                "title": "projects.buttons.github-actions",
                "url": "https://github.com/arrnel/automation-exercise-py/actions"
            }
        ],
        images: [
            "/assets/project/automation-exercise-py/logo.png",
            "/assets/project/automation-exercise-py/github_actions.png",
            "/assets/project/automation-exercise-py/test_runs.png",
            "/assets/project/automation-exercise-py/allure_report_example.png",
            "/assets/project/automation-exercise-py/pull_request_message.png"
        ]
    }
];