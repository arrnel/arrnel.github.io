import type {Experience} from "./types/Experience.ts";
import {SKILLS} from "./skills.ts";
import {Skill} from "./types/Skill.ts";

export const EXPERIENCES: Experience[] = [
    {
        title: 'work2.title',
        description: 'work2.description',
        start_date: '08.2023',
        end_date: 'ongoing',
        image_link: [
            // JAVA
            SKILLS[Skill.JAVA],
            SKILLS[Skill.SPRING_BOOT],
            SKILLS[Skill.JUNIT5],
            SKILLS[Skill.GRADLE],
            SKILLS[Skill.JDBC],
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
        title: 'work1.title',
        description: 'work1.description',
        start_date: '11.2019',
        end_date: '08.2023',
        image_link: [
            // JAVA
            SKILLS[Skill.JAVA],
            SKILLS[Skill.JUNIT5],
            SKILLS[Skill.GRADLE],
            SKILLS[Skill.JDBC],
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
];