import { Link } from 'react-router-dom';
import notFoundImage from '../images/img-not-found.png';
import css from './Page.module.css';

const NotFoundPage = () => {
  return (
    <div className={css.pageNotFound}>
      <div className={css.headerNotFound}>
        {' '}
        <Link to="/" className={css.linkBackHome}>
          Back to home page
        </Link>
        <h2>Page not found</h2>
      </div>
      <img src={notFoundImage} alt="Not Found" width={400} />
    </div>
  );
};

export default NotFoundPage;
