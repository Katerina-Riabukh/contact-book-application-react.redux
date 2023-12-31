import React from 'react';
import { ContactItem } from './ContactItem';

import { useSelector } from 'react-redux';
import { selectContacts, selectfilter } from 'redux/contacts/selectors';
import { UL } from './contactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectfilter);

  const filteredContactsList = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  });

  return (
    <UL>
      {contacts.length !== 0 ? (
        filteredContactsList.map(item => {
          return <ContactItem item={item} key={item.id} />;
        })
      ) : (
        <p>Here is no contacts yet.</p>
      )}
    </UL>
  );
};
