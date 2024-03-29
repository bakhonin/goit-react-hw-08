import css from './Page.module.css';
import DocumentTitle from '../components/DocumentTitle';
import LoginForm from '../components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div>
      <DocumentTitle>Login</DocumentTitle>
      <h2 className={css.pageTitle}>Login page</h2>
      <LoginForm />
    </div>
  );
};

export default Login;
