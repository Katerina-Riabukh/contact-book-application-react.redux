import { H1, H2, Wraper } from 'components/App/App.styled';
import { ContactList } from 'components/contactList/contactList';
import { FilterContacts } from 'components/filter/filterContacts';
import { Form } from 'components/form/form';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/fetch';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wraper>
      <H1>Phone book</H1>
      <button type="button" onClick={() => setShowModal(true)}>
        Add contact
      </button>
      {showModal && <Form onClose={() => setShowModal(false)} />}
      <H2>Contacts</H2>
      <FilterContacts />
      <ContactList />
    </Wraper>
  );
};
