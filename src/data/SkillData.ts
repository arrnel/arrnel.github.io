import type {ImageLink} from "../model/ImageLink.ts";
import {Skill} from "../model/Skill.ts";

export const SKILLS: Record<string, ImageLink> = {
    [Skill.JAVA]: {
        title: Skill.JAVA,
        url: "https://docs.oracle.com/en/java/",
        image: "/assets/skill/java.svg"
    },
    [Skill.SPRING_BOOT]: {
        title: Skill.SPRING_BOOT,
        url: "https://docs.spring.io/spring-boot/documentation.html",
        image: "/assets/skill/spring_boot.svg"
    },
    [Skill.GRADLE]: {
        title: Skill.GRADLE,
        url: "https://docs.gradle.org/current/userguide/userguide.html",
        image: "/assets/skill/gradle.svg"
    },
    [Skill.JUNIT5]: {
        title: Skill.JUNIT5,
        url: "https://docs.junit.org/5.5.0/user-guide/",
        image: "/assets/skill/junit5.svg"
    },
    [Skill.RETROFIT]: {
        title: Skill.RETROFIT,
        url: "https://square.github.io/retrofit/",
        image: "/assets/skill/retrofit.svg"
    },
    [Skill.REST_ASSURED]: {
        title: Skill.REST_ASSURED,
        url: "https://rest-assured.io/",
        image: "/assets/skill/rest_assured.svg"
    },
    [Skill.SOAP]: {
        title: Skill.SOAP,
        url: "https://www.w3.org/TR/soap/",
        image: "/assets/skill/soap.svg"
    },
    [Skill.SELENIDE]: {
        title: Skill.SELENIDE,
        url: "https://selenide.org/documentation.html",
        image: "/assets/skill/selenide.svg"
    },
    [Skill.PLAYWRIGHT]: {
        title: Skill.PLAYWRIGHT,
        url: "https://playwright.dev/java/docs/api/class-playwright",
        image: "/assets/skill/playwright.svg"
    },
    [Skill.RABBIT_MQ]: {
        title: Skill.RABBIT_MQ,
        url: "https://www.rabbitmq.com/tutorials",
        image: "/assets/skill/rabbit_mq.svg"
    },
    [Skill.KAFKA]: {
        title: Skill.KAFKA,
        url: "https://kafka.apache.org/42/getting-started/",
        image: "/assets/skill/kafka.svg"
    },
    [Skill.GRPC]: {
        title: Skill.GRPC,
        url: "https://grpc.io/docs/languages/java/quickstart/",
        image: "/assets/skill/grpc.svg"
    },
    [Skill.HIBERNATE]: {
        title: Skill.HIBERNATE,
        url: "https://hibernate.org/orm/documentation/getting-started/",
        image: "/assets/skill/hibernate.svg"
    },
    [Skill.JDBC]: {
        title: Skill.JDBC,
        url: "https://docs.oracle.com/javase/tutorial/jdbc/basics/gettingstarted.html",
        image: "/assets/skill/jdbc.svg"
    },
    [Skill.SPRING_JDBC]: {
        title: Skill.SPRING_JDBC,
        url: "https://spring.io/projects/spring-data-jdbc",
        image: "/assets/skill/jdbc.svg"
    },
    [Skill.PYTHON]: {
        title: Skill.PYTHON,
        url: "https://docs.python.org/3.13/tutorial/index.html",
        image: "/assets/skill/python.svg"
    },
    [Skill.POETRY]: {
        title: Skill.POETRY,
        url: "https://python-poetry.org/docs/",
        image: "/assets/skill/poetry.svg"
    },
    [Skill.PYDANTIC]: {
        title: Skill.PYDANTIC,
        url: "https://docs.pydantic.dev/latest/api/base_model/",
        image: "/assets/skill/pydantic.svg"
    },
    [Skill.HTTPX]: {
        title: Skill.HTTPX,
        url: "https://www.python-httpx.org/quickstart/",
        image: "/assets/skill/httpx.svg"
    },
    [Skill.SELENE]: {
        title: Skill.SELENE,
        url: "https://github.com/yashaka/selene",
        image: "/assets/skill/selene.svg"
    },
    [Skill.ALLURE]: {
        title: Skill.ALLURE,
        url: "https://allurereport.org/docs/",
        image: "/assets/skill/allure.svg"
    },
    [Skill.GIT]: {
        title: Skill.GIT,
        url: "https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control",
        image: "/assets/skill/git.svg"
    },
    [Skill.GITHUB]: {
        title: Skill.GITHUB,
        url: "https://github.com/",
        image: "/assets/skill/github.svg"
    },
    [Skill.GITLAB]: {
        title: Skill.GITLAB,
        url: "https://about.gitlab.com/",
        image: "/assets/skill/gitlab.svg"
    },
    [Skill.SELENOID]: {
        title: Skill.SELENOID,
        url: "https://aerokube.com/selenoid/latest/",
        image: "/assets/skill/selenoid.svg"
    },
    [Skill.DOCKER]: {
        title: Skill.DOCKER,
        url: "https://docs.docker.com/get-started/",
        image: "/assets/skill/docker.svg"
    },
    [Skill.GITHUB_ACTIONS]: {
        title: Skill.GITHUB_ACTIONS,
        url: "https://docs.github.com/en/actions/get-started/quickstart",
        image: "/assets/skill/github_actions.svg"
    },
    [Skill.JENKINS]: {
        title: Skill.JENKINS,
        url: "https://www.jenkins.io/sigs/docs/",
        image: "/assets/skill/jenkins.svg"
    },
    [Skill.TEAM_CITY]: {
        title: Skill.TEAM_CITY,
        url: "https://www.jetbrains.com/teamcity/learn/",
        image: "/assets/skill/teamcity.svg"
    },
    [Skill.POSTGRESQL]: {
        title: Skill.POSTGRESQL,
        url: "https://www.postgresql.org/docs/current/tutorial-start.html",
        image: "/assets/skill/postgresql.svg"
    },
    [Skill.KIBANA]: {
        title: Skill.KIBANA,
        url: "https://www.elastic.co/docs/extend/kibana/development-getting-started",
        image: "/assets/skill/kibana.svg"
    }
};