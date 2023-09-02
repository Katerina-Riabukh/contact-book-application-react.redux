import React from 'react';
import PropTypes from 'prop-types';
import { Button, LI, NUMBER, Name } from './contactItems.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/fetch';
import { FcDeleteDatabase } from 'react-icons/fc';

export const ContactItem = ({ item }) => {
  const { name, number, id } = item;
  const dispatch = useDispatch();

  return (
    <LI key={id}>
      <Name>{name}</Name>
      <NUMBER>{number}</NUMBER>
      <Button onClick={() => dispatch(deleteContact({ id }))}>
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
