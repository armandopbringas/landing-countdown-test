import styles from './DateTimeDisplay.module.scss';

const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className={styles.circle}>
      <p className={styles.number}>{value}</p>
      <span>
        <strong>{type}</strong>
      </span>
    </div>
  );
};

export default DateTimeDisplay;