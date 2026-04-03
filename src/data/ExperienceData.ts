import type {Experience} from "../model/Experience.ts";
import {SKILLS} from "./SkillData.ts";
import {Skill} from "../model/Skill.ts";
import {FormatTranslateCode} from "../model/ModifiedText.ts";

export const EXPERIENCES_DATA: Experience[] = [
    {
        position: 'experience.works.2.position',
        company: 'experience.works.2.company',
        short_description: 'experience.works.2.short_description',
        description: new FormatTranslateCode('experience.works.2.description'),
        start_date: '08.2023',
        end_date: 'ongoing',
        skills: [
            // JAVA
            SKILLS[Skill.JAVA],
            SKILLS[Skill.SPRING_BOOT],
            SKILLS[Skill.JUNIT5],
            SKILLS[Skill.GRADLE],
            SKILLS[Skill.SPRING_JDBC],
            SKILLS[Skill.HIBERNATE],
            SKILLS[Skill.GRPC],
            SKILLS[Skill.KAFKA],
            SKILLS[Skill.SOAP],
            SKILLS[Skill.REST_ASSURED],
            SKILLS[Skill.RETROFIT],
            SKILLS[Skill.SELENIDE],
            SKILLS[Skill.PLAYWRIGHT],
            // PYTHON
            SKILLS[Skill.PYTHON],
            SKILLS[Skill.POETRY],
            SKILLS[Skill.PYDANTIC],
            SKILLS[Skill.HTTPX],
            SKILLS[Skill.SELENE],
            // COMMON
            SKILLS[Skill.SELENOID],
            SKILLS[Skill.DOCKER],
            SKILLS[Skill.ALLURE],
            SKILLS[Skill.GIT],
            SKILLS[Skill.GITHUB],
            SKILLS[Skill.GITHUB_ACTIONS],
            SKILLS[Skill.KIBANA],
            SKILLS[Skill.POSTGRESQL]
        ]
    },
    {
        position: 'experience.works.1.position',
        company: 'experience.works.1.company',
        short_description: 'experience.works.1.short_description',
        description: new FormatTranslateCode('experience.works.1.description'),
        start_date: '11.2019',
        end_date: '08.2023',
        skills: [
            // JAVA
            SKILLS[Skill.JAVA],
            SKILLS[Skill.JUNIT5],
            SKILLS[Skill.GRADLE],
            SKILLS[Skill.HIBERNATE],
            SKILLS[Skill.RABBIT_MQ],
            SKILLS[Skill.SOAP],
            SKILLS[Skill.REST_ASSURED],
            SKILLS[Skill.SELENIDE],
            // COMMON
            SKILLS[Skill.SELENOID],
            SKILLS[Skill.DOCKER],
            SKILLS[Skill.ALLURE],
            SKILLS[Skill.GIT],
            SKILLS[Skill.GITLAB],
            SKILLS[Skill.TEAM_CITY],
            SKILLS[Skill.JENKINS],
            SKILLS[Skill.KIBANA],
            SKILLS[Skill.POSTGRESQL]
        ]
    },
    {
        position: 'experience.works.0.position',
        company: 'experience.works.0.company',
        short_description: 'experience.works.0.short_description',
        description: new FormatTranslateCode('experience.works.0.description'),
        start_date: '11.2018',
        end_date: '11.2019',
        skills: [
            // JAVA
            SKILLS[Skill.JAVA],
            SKILLS[Skill.JUNIT5],
            SKILLS[Skill.GRADLE],
            SKILLS[Skill.SPRING_JDBC],
            SKILLS[Skill.HIBERNATE],
            SKILLS[Skill.RABBIT_MQ],
            SKILLS[Skill.SOAP],
            SKILLS[Skill.REST_ASSURED],
            SKILLS[Skill.RETROFIT],
            SKILLS[Skill.SELENIDE],
            SKILLS[Skill.PLAYWRIGHT],
            // PYTHON
            SKILLS[Skill.PYTHON],
            SKILLS[Skill.POETRY],
            SKILLS[Skill.PYDANTIC],
            SKILLS[Skill.HTTPX],
            SKILLS[Skill.SELENE]
        ]
    },
];