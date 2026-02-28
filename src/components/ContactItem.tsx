import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Link } from '../data/types/Link';

const ContactItem: React.FC<{ contact: Link }> = ({ contact }) => {
  const { t } = useTranslation();

  return <a href={contact.url}>{t(contact.title)}</a>;
};

export default ContactItem;