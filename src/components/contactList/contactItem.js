import React from 'react';
import PropTypes from 'prop-types';
import { Button, LI, Name } from './contactItems.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/fetch';
// import { selectContacts } from 'redux/contacts/selectors';

export const ContactItem = ({ item }) => {
  const { name, number, id } = item;
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);
  // const contacts = useSelector(selectContacts);

  //   return contacts.map(({ name, number, id }) => {
  //     return (
  //       <LI id={id}>
  //         <Name>{name}</Name>
  //         <span>{number}</span>
  //         <Button onClick={dispatch(deleteContact({ id, token }))}>
  //           Delate contact
  //         </Button>{' '}
  //       </LI>
  //     );
  //   });
  // };

  return (
    <LI key={id}>
      <Name>{name}</Name>
      <span>{number}</span>
      <Button onClick={() => dispatch(deleteContact({ id, token }))}>
        Delate contact
      </Button>
    </LI>
  );
};

// {
//   if (!contacts) {
//     return;
//   }
//   contacts.map(item => {
//     return <ContactItem item={item} key={item.id} />;
//   });
// }
ContactItem.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
  id: PropTypes.string,
};
