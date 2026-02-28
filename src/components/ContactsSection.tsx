import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';
import { contacts } from '../data/contacts';
import ContactItem from "./ContactItem.tsx";

const ContactsSection = forwardRef<HTMLElement>((_, ref) => {
  const { t } = useTranslation();

  return (
    <section ref={ref} className="section contacts-section">
      <h2>{t('contacts_title')}</h2>
      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <ContactItem key={index} contact={contact} />
        ))}
      </div>
    </section>
  );
});

export default ContactsSection;