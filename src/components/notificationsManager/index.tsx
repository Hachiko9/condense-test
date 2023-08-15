import { useContext } from 'react';
import { NotificationsContext } from './notificationsContext';
import { Notification } from '../notification';
import styles from './notificationsManager.module.css';

export default function NotificationsManager() {
  const { queue } = useContext(NotificationsContext);

  return (
    <div className={styles.root}>
      {queue.map((notification) => (
        <Notification key={notification.id} notification={notification} />
      ))}
    </div>
  );
}
