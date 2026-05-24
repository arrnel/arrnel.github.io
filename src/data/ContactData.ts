import type {Contact} from "../model/Contact.ts";

export const CONTACTS_DATA: Contact[] = [
    {
        title: 'contacts.telegram',
        url: `https://t.me/${import.meta.env.VITE_SOCIAL_TELEGRAM}`,
        image: '/assets/social/telegram.svg'
    },
    {
        title: 'contacts.email',
        url: `mailto:${import.meta.env.VITE_SOCIAL_EMAIL}`,
        image: '/assets/social/email.svg'
    }
];