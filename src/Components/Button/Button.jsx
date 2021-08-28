import styles from './Button.module.css';

function Button({ onClick }) {
  return (
    <button onClick={onClick} className={styles.Button}>
      Load more
    </button>
  );
}

export { Button };
