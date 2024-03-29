import DocumentTitle from '../components/DocumentTitle';
import RegisterForm from '../components/RegisterForm/RegisterForm';
import css from './Page.module.css';

const Register = () => {
  return (
    <div>
      <DocumentTitle>Registration</DocumentTitle>
      <h2 className={css.pageTitle}>Register page</h2>
      <RegisterForm />
    </div>
  );
};

export default Register;
