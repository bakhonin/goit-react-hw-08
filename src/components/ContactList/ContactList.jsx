import { deleteContact, fetchContacts } from '../../redux/contacts/operations.js';
import Contact from '../Contact/Contact';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contactsSlice';
import { selectFilter } from '../../redux/contacts/filtersSlice';
import { useEffect } from 'react';
import css from './ContactList.module.css';

const ContactList = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectContacts);
  const nameFilter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = userId => {
    dispatch(deleteContact(userId));
  };

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <div className={css.contacts}>
      {filteredUsers.map(user => (
        <Contact key={user.id} user={user} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ContactList;
