import Loader from 'react-loader-spinner';
import styles from './Loader.module.css';

const Load = () => {
  return (
    <Loader
      type="MutatingDots"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={500}
      className={styles.loader}
    />
  );
};

export { Load };
