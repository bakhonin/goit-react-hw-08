import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink className={css.linkRegister} to="/register">
        Register
      </NavLink>
      <NavLink className={css.linkLogin} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
