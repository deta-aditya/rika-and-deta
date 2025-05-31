import dayjs from "dayjs"
import * as styles from "../Main.styles"
import { useModalContext } from "../../../contexts/ModalContext";
import { useEffect, useState } from "react";

const THE_DATE = dayjs('2025-06-15');

export const WeddingDate = (props: { className?: string }) => {
  const now = dayjs();
  const diff = Math.abs(now.diff(THE_DATE, 'days'));
  const { openModal } = useModalContext();

  const handleClick = () => {
    openModal({
      title: 'Countdown',
      body: <CountdownModal />
    });
  }

  return (
    <div css={styles.weddingDate} className={props.className} onClick={handleClick}>
      <div className="exact-date">Sunday, 15 June 2025</div>
      <div className="countdown">
        {diff <= 0 ? "Today!" : `${diff} days to go!`}
      </div>
    </div>
  );
}

const formatTimeUnit = (unit: number) => {
  return String(unit).padStart(2, '0')
}

const CountdownModal = () => {
  const [now, setNow] = useState(dayjs());
  useEffect(() => {
    const interval = setInterval(() => {
      setNow(dayjs());
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);
  
  const days = THE_DATE.diff(now, 'days');
  const hours = THE_DATE.subtract(days, 'days').diff(now, 'hours');
  const minutes = THE_DATE.subtract(days, 'days').subtract(hours, 'hours').diff(now, 'minutes');
  const seconds = THE_DATE.subtract(days, 'days').subtract(hours, 'hours').subtract(minutes, 'minutes').diff(now, 'seconds');

  return (
    <div css={styles.countdownModal}>
      <TimeUnit label="Days" value={days} />
      <TimeUnit label="Hours" value={hours} />
      <TimeUnit label="Minutes" value={minutes} />
      <TimeUnit label="Seconds" value={seconds} />
    </div>
  );
};

const TimeUnit = (props: { value: number, label: string }) => {
  return (
    <div className="time-unit">
      <div className="time-unit-value">{formatTimeUnit(props.value)}</div>
      <span className="time-unit-label">{props.label}</span>
    </div>
  );
}
