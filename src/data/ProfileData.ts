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
            id: "telegram",
            title: "profile.social.telegram",
            url: `http://t.me/${import.meta.env.VITE_SOCIAL_TELEGRAM}`,
            image: "/assets/social/telegram.svg",
        },
        {
            id: "linkedin",
            title: "profile.social.linkedin",
            url: `http://linkedin.com/${import.meta.env.VITE_SOCIAL_LINKEDIN}`,
            image: "/assets/social/linkedin.svg",
        },
        {
            id: "github",
            title: "profile.social.github",
            url: `http://github.com/${import.meta.env.VITE_REPO_OWNER}`,
            image: "/assets/skill/github.svg",
        }
    ]
};