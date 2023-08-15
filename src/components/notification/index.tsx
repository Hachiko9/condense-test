import { FC, useContext, useEffect } from 'react';
import styles from './notification.module.css';
import {
  INotificationObj,
  NotificationsContext,
} from '../notificationsManager/notificationsContext';

interface INotificationProps {
  notification: INotificationObj;
}

export const Notification: FC<INotificationProps> = ({ notification }) => {
  const { closeNotification } = useContext(NotificationsContext);

  const handleClose = () => {
    closeNotification(notification);
  };

  useEffect(() => {
    setTimeout(() => {
      handleClose();
    }, 5000);
  }, []);

  return (
    <div className={styles.root}>
      <button className={styles.button} onClick={handleClose}>
        x
      </button>

      <div className={styles.textContainer}>
        {notification.action === 'add' ? (
          <p>New Favourite Movie!</p>
        ) : (
          <p>Remvoved Favorite Movie!</p>
        )}
      </div>
    </div>
  );
};
