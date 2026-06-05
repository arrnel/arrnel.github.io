import type {Project} from "../model/Project.ts";
import {FormatTranslateCode} from "../model/ModifiedText.ts";

const VITE_REPO_OWNER = import.meta.env.VITE_REPO_OWNER;
const VITE_REPO_ROCOCO = import.meta.env.VITE_REPO_ROCOCO;
const VITE_REPO_BANK = import.meta.env.VITE_REPO_BANK;
const VITE_REPO_AE = import.meta.env.VITE_REPO_AE;
const VITE_REPO_AE_PY = import.meta.env.VITE_REPO_AE_PY;
const VITE_ROCOCO_REPORT_EXAMPLE = import.meta.env.VITE_ROCOCO_REPORT_EXAMPLE;
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

// Site
const AE_SITE_URL = "https://automationexercise.com/"

// Common Images Path
const SPRING_BACKEND_IMAGE_PATH = `/assets/project/spring_backend_app.png`;


export const PROJECTS_DATA: Project[] = [
    {
        id: VITE_REPO_ROCOCO,
        title: projectTitleTC(0),
        short_description: projectShortDescriptionTC(0),
        description: projectDescriptionTC(0),
        links: [
            {
                link_type: LT_REPO,
                title: TC_GITHUB,
                url: repoUrl(VITE_REPO_ROCOCO),
            },
            {
                link_type: LT_TEST_RUNS,
                title: TC_TEST_RUNS,
                url: testRunsUrl(VITE_REPO_ROCOCO),
            },
            {
                link_type: LT_REPORT_EXAMPLE,
                title: TC_REPORT_EXAMPLE,
                url: testReportExampleUrl(VITE_REPO_ROCOCO, VITE_ROCOCO_REPORT_EXAMPLE),
            },
            {
                link_type: LT_GHA,
                title: TC_GHA,
                url: ghaUrl(VITE_REPO_ROCOCO),
            },
        ],
        logo: projectLogoPath(VITE_REPO_ROCOCO),
        images: [
            pathToSitePreviewImage(VITE_REPO_ROCOCO),
            pathToGithubActionsImage(VITE_REPO_ROCOCO),
            pathToTestRunsImage(VITE_REPO_ROCOCO),
            pathToReportExampleImage(VITE_REPO_ROCOCO),
            pathToPullRequestImage(VITE_REPO_ROCOCO),
        ],
    },
    {
        id: VITE_REPO_BANK,
        title: projectTitleTC(1),
        short_description: projectShortDescriptionTC(1),
        description: projectDescriptionTC(1),
        links: [
            {
                link_type: LT_REPO,
                title: TC_GITHUB,
                url: repoUrl(VITE_REPO_BANK),
            },
            {
                link_type: LT_TEST_RUNS,
                title: TC_TEST_RUNS,
                url: testRunsUrl(VITE_REPO_BANK)
            },
            {
                link_type: LT_REPORT_EXAMPLE,
                title: TC_REPORT_EXAMPLE,
                url: testReportExampleUrl(VITE_REPO_BANK, VITE_BANK_REPORT_EXAMPLE)
            },
            {
                link_type: LT_GHA,
                title: TC_GHA,
                url: ghaUrl(VITE_REPO_BANK),
            },
        ],
        logo: projectLogoPath(VITE_REPO_BANK),
        images: [
            SPRING_BACKEND_IMAGE_PATH,
            pathToGithubActionsImage(VITE_REPO_BANK),
            pathToTestRunsImage(VITE_REPO_BANK),
            pathToReportExampleImage(VITE_REPO_BANK),
            pathToPullRequestImage(VITE_REPO_BANK),
        ],
    },
    {
        id: VITE_REPO_AE,
        title: projectTitleTC(2),
        short_description: projectShortDescriptionTC(2),
        description: projectDescriptionTC(2),
        links: [
            {
                link_type: LT_REPO,
                title: TC_GITHUB,
                url: repoUrl(VITE_REPO_AE),
            },
            {
                link_type: LT_SITE,
                title: TC_SITE,
                url: AE_SITE_URL,
            },
            {
                link_type: LT_TEST_RUNS,
                title: TC_TEST_RUNS,
                url: testRunsUrl(VITE_REPO_AE),
            },
            {
                link_type: LT_REPORT_EXAMPLE,
                title: TC_REPORT_EXAMPLE,
                url: testReportExampleUrl(VITE_REPO_AE, VITE_AE_REPORT_EXAMPLE),
            },
            {
                link_type: LT_GHA,
                title: TC_GHA,
                url: ghaUrl(VITE_REPO_AE),
            },
        ],
        logo: projectLogoPath(VITE_REPO_AE),
        images: [
            pathToSitePreviewImage(VITE_REPO_AE),
            pathToGithubActionsImage(VITE_REPO_AE),
            pathToTestRunsImage(VITE_REPO_AE),
            pathToReportExampleImage(VITE_REPO_AE),
            pathToPullRequestImage(VITE_REPO_AE),
        ],
    },
    {
        id: VITE_REPO_AE_PY,
        title: projectTitleTC(3),
        short_description: projectShortDescriptionTC(3),
        description: projectDescriptionTC(3),
        links: [
            {
                link_type: LT_REPO,
                title: TC_GITHUB,
                url: repoUrl(VITE_REPO_AE_PY),
            },
            {
                link_type: LT_SITE,
                title: TC_SITE,
                url: AE_SITE_URL,
            },
            {
                link_type: LT_TEST_RUNS,
                title: TC_TEST_RUNS,
                url: testRunsUrl(VITE_REPO_AE_PY),
            },
            {
                link_type: LT_REPORT_EXAMPLE,
                title: TC_REPORT_EXAMPLE,
                url: testReportExampleUrl(VITE_REPO_AE_PY, VITE_AE_PY_REPORT_EXAMPLE),
            },
            {
                link_type: LT_GHA,
                title: TC_GHA,
                url: ghaUrl(VITE_REPO_AE_PY),
            },
        ],
        logo: projectLogoPath(VITE_REPO_AE_PY),
        images: [
            pathToSitePreviewImage(VITE_REPO_AE_PY),
            pathToGithubActionsImage(VITE_REPO_AE_PY),
            pathToTestRunsImage(VITE_REPO_AE_PY),
            pathToReportExampleImage(VITE_REPO_AE_PY),
            pathToPullRequestImage(VITE_REPO_AE_PY),
        ],
    }
];

function projectTitleTC(projectNumber: number): string {
    return `projects.project_info.${projectNumber}.title`
}

function projectShortDescriptionTC(projectNumber: number): string {
    return `projects.project_info.${projectNumber}.short_description`;
}

function projectDescriptionTC(projectNumber: number) {
    return new FormatTranslateCode(`projects.project_info.${projectNumber}.description`);
}

// Project Links
function repoUrl(repoName: string): string {
    return `https://github.com/${VITE_REPO_OWNER}/${repoName}`;
}

function testRunsUrl(repoName: string): string {
    return `https://${VITE_REPO_OWNER}.github.io/${repoName}`;
}

function testReportExampleUrl(repoName: string, reportExample: string): string {
    return `https://${VITE_REPO_OWNER}.github.io/${repoName}/${reportExample}`;
}

function ghaUrl(repoName:string) {
    return `https://github.com/${VITE_REPO_OWNER}/${repoName}/actions`
}


// Project Images Paths
function projectLogoPath(projectTitle: string): string {
    return `/assets/project/${projectTitle}/logo.png`.toLowerCase();
}

function pathToSitePreviewImage(repoName: string) : string {
    return `/assets/project/${repoName}/site.png`;
}

function pathToGithubActionsImage(repoName: string) : string {
    return `/assets/project/${repoName}/github_actions.png`;
}

function pathToTestRunsImage(repoName: string) : string {
    return `/assets/project/${repoName}/allure_report_example.png`;
}

function pathToReportExampleImage(repoName: string) : string {
    return `/assets/project/${repoName}/test_runs.png`;
}

function pathToPullRequestImage(repoName: string) : string {
    return `/assets/project/${repoName}/pull_request_message.png`;
}