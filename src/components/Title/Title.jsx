import { FaAddressBook } from 'react-icons/fa';
import css from './Title.module.css';

const Title = () => {
  return (
    <div className={css.title}>
      <h3 className={css.titleText}>
        Phonebook <FaAddressBook />
      </h3>
    </div>
  );
};

export default Title;
