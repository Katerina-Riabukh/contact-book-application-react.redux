import { ADD, H1, Wraper } from 'components/App/App.styled';

import { FilterContacts } from 'components/Filter/FilterContacts';
import { Form } from 'components/Form/Form';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/fetch';
import { FcAddDatabase } from 'react-icons/fc';
import { ContactList } from 'components/ContactList/ContactList';

export const Contacts = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wraper>
      <H1>Contacts book</H1>
      <ADD type="button" onClick={() => setShowModal(true)}>
        {
          <FcAddDatabase
            style={{ width: '50px', height: '50px', margin: '0px' }}
          />
        }
      </ADD>
      {showModal && <Form onClose={() => setShowModal(false)} />}
      <FilterContacts />
      <ContactList />
    </Wraper>
  );
};
