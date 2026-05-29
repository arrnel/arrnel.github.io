import React from 'react';
import {useTranslation} from 'react-i18next';
import type {ImageLink} from "../../model/ImageLink.ts";
import styles from './ContactItemComponent.module.css'
import {analytics} from "../../service/analytics.instance.ts";

const ContactItemComponent: React.FC<{ contact: ImageLink }> = ({contact}) => {

    const {t} = useTranslation();

    const handleContactClick = (socialId: string, url: string) => {
        window.open(url, '_blank');
        analytics.navigateByContactEvent(socialId);
    };

    return (
        <button className={styles.contactInfoContainer}
                onClick={() => handleContactClick(contact.id, contact.url)}
        >
            <img src={contact.image}
                 alt={`${contact.title} icon`}
                 className={`medium-icon ${styles.contactIcon}`}
            />
            <p className={styles.contactTitle}>{t(contact.title)}</p>
        </button>
    )

};

export default ContactItemComponent;