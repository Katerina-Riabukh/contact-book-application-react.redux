import { H1, H2, Wraper } from 'components/App/App.styled';
import { ContactList } from 'components/contactList/contactList';
import { FilterContacts } from 'components/filter/filterContacts';
import { Form } from 'components/form/form';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/fetch';
// import { selectError, selectIsLoading } from 'redux/contacts/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // return (
  //   <Wraper>
  //     <H1>Phone book</H1>
  //     <Form />
  //     <H2>Contacts</H2>
  //     <FilterContacts />
  //     {isLoading && <p>Loading ...</p>}
  //     {error && <p>Something wrong...</p>}
  //     <ContactList />
  //   </Wraper>
  // );

  return (
    <Wraper>
      <H1>Phone book</H1>
      <Form />
      <H2>Contacts</H2>
      <FilterContacts />
      <ContactList />
    </Wraper>
  );
};
