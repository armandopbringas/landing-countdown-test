import DateTimeDisplay from "../DateTimeDisplay/DateTimeDisplay";
import useCountDown from "../../hooks/useCountDown";
import styles from './CountDownTimer.module.scss';

const ExpiredNotice = () => {
  return (
    <>
      <h2 className={styles.expiredDate}>
        Es hoy! Es hoy!
      </h2>
    </>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className={styles.heroTimerContainer}>
      <DateTimeDisplay value={days} type={"DÍAS"} />
      <DateTimeDisplay value={hours} type={"HRS"} />
      <DateTimeDisplay value={minutes} type={"MIN."} />
      <DateTimeDisplay value={seconds} type={"SEG"} />
    </div>
  );
};

const CountDownTimer = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountDown(targetDate);
  if (days + hours + minutes + seconds <= 0) return <ExpiredNotice />
  else return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />
};

export default CountDownTimer;