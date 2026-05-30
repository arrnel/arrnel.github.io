import {type Contact, ContactType} from "../model/Contact.ts";

export const CONTACTS_DATA: Contact[] = [
    {
        id: ContactType.TELEGRAM,
        title: 'contacts.telegram',
        url: `https://t.me/${import.meta.env.VITE_SOCIAL_TELEGRAM}`,
        image: '/assets/social/telegram.svg'
    },
    {
        id: ContactType.EMAIL,
        title: 'contacts.email',
        url: `mailto:${import.meta.env.VITE_SOCIAL_EMAIL}`,
        image: '/assets/social/email.svg'
    }
];