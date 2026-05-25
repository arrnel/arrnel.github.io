import type {About} from "../model/About.ts";
import {FormatTranslateCode} from "../model/ModifiedText.ts";

export const ABOUT_DATA: About = {
    image: "assets/about-pic.png",
    summary: "about.summary",
    details: [
        {
            title: "about.experience.title",
            description: new FormatTranslateCode("about.experience.description"),
            image: "assets/icon/medal_dark.svg"
        },
        {
            title: "about.education.title",
            description: new FormatTranslateCode("about.education.description"),
            image: "assets/icon/degree_dark.svg"
        }
    ]
};