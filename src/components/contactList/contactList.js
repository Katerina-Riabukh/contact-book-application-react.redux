import React from 'react';
import { ContactItem } from './contactItem';
import { UL } from './contactList.styled';
import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  // const filterValue = useSelector(selectfilter);

  // const filteredContactsList = contacts.filter(contact => {
  //   return contact.name.toLowerCase().includes(filterValue.toLowerCase());
  // });

  return (
    <UL>
      {contacts.length !== 0 ? (
        contacts.map(item => {
          return <ContactItem item={item} />;
        })
      ) : (
        <p>Here is no contacts yet.</p>
      )}
    </UL>
  );
};
