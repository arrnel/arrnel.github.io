import type {Profile} from "../model/Profile.ts";

export const PROFILE_DATA: Profile = {
    full_name: "profile.full_name",
    position: "profile.position",
    description: "profile.description",
    image: {
        image: "/assets/profile.png",
        title: "Profile image"
    },
    socials: [
        {
            title: "profile.social.telegram",
            url: "http://t.me/arrnel94",
            image: "/assets/social/telegram.svg",
        },
        {
            title: "profile.social.linkedin",
            url: "http://linkedin.com/arrnel",
            image: "/assets/social/linkedin.svg",
        },
        {
            title: "profile.social.github",
            url: "http://t.me/arrnel",
            image: "/assets/skill/github.svg",
        }
    ]
};