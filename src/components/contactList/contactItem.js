import React from 'react';
import PropTypes from 'prop-types';
import { Button, LI, Name } from './contactItems.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contacts/fetch';
import { FcDeleteDatabase } from 'react-icons/fc';

export const ContactItem = ({ item }) => {
  const { name, number, id } = item;
  const dispatch = useDispatch();
  const token = useSelector(state => state.user.token);

  return (
    <LI key={id}>
      <Name>{name}</Name>
      <span>{number}</span>
      <Button onClick={() => dispatch(deleteContact({ id, token }))}>
        {
          <FcDeleteDatabase
            style={{ width: '30px', height: '30px', margin: '0px' }}
          />
        }
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
