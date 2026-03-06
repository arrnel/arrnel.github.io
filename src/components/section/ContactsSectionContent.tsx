import type {Contact} from "../../model/Contact.ts";
import styles from "./ContactsSectionContent.module.css";
import ContactItemComponent from "../contacts/ContactItemComponent.tsx";

const ContactsSectionContent: React.FC<{
    contacts: Contact[];
}> = ({ contacts }) => {
    return (
        <div className={`sectionContentContainer ${styles.contactsSectionContentContainer}`}>
            <div className={styles.contactsList}>
                {contacts.map((contact, idx) => (
                    <ContactItemComponent key={idx} contact={contact} />
                ))}
            </div>
        </div>
    );
};

export default ContactsSectionContent;