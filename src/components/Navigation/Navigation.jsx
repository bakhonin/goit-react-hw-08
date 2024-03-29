import { NavLink } from 'react-router-dom';
import { useAuth } from '../../hooks';
import Title from '../Title/Title';
import css from './Navigation.module.css';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={css.link} to="/">
        <Title />
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.link} to="/contacts">
          <h3 className={css.titleContactList}>Contacts list</h3>
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
