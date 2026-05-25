import React from 'react';
import {useTranslation} from 'react-i18next';
import type {ImageLink} from "../../model/ImageLink.ts";
import styles from './ContactItemComponent.module.css'

const ContactItemComponent: React.FC<{ contact: ImageLink }> = ({contact}) => {

    const repoName = import.meta.env.VITE_REPO_RESUME;
    const {t} = useTranslation();

    return (
        <a href={contact.url}>
            <div className={styles.contactInfoContainer}>
                <img src={repoName + contact.image}
                     alt={`${contact.title} icon`}
                     className={`medium-icon ${styles.contactIcon}`}
                />
                <p className={styles.contactTitle}>{t(contact.title)}</p>
            </div>
        </a>

    )

};

export default ContactItemComponent;