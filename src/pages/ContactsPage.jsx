import { ErrorMessage } from 'formik';
import ContactForm from '../components/ContactForm/ContactForm';
import SearchBox from '../components/SearchBox/SearchBox';
import Loader from '../components/Loader/Loader';
import ContactList from '../components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations.js';
import { useEffect } from 'react';
import { selectContactsLoading, selectContactsError } from '../redux/contacts/selector';
import { Toaster } from 'react-hot-toast';
import css from './Page.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const loader = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h2 className={css.pageTitle}>Contacts list</h2>
      <ContactForm />
      <SearchBox />
      {loader && <Loader />}
      {error && <ErrorMessage />}
      <ContactList />
      <Toaster position="top-right" />
    </div>
  );
};

export default ContactsPage;
