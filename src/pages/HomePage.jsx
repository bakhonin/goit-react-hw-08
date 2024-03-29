import css from './Page.module.css';
import DocumentTitle from '../components/DocumentTitle';
import catMobile from '../images/cat-mobile.png';

const Home = () => {
  return (
    <div className={css.pageContainer}>
      <div>
        <DocumentTitle>Home</DocumentTitle>
        <h2 className={css.pageTitle}>Home page</h2>
        <img src={catMobile} alt="cat and phone" width={300} />
      </div>
    </div>
  );
};

export default Home;
