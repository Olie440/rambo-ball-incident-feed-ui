import date from 'dayjs';
import styles from './incident.style.scss';

export default function Incident({ type, timestamp }) {
    return (
        <div className={styles.incident}>
            <div className={styles.timestamp}>
                { date.unix(timestamp).format('HH:mm:ss') }
            </div>
            <div>{ type }</div>
        </div>
    );
}