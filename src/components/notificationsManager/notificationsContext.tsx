import type { FC, ReactNode } from 'react';
import { createContext, useCallback, useState } from 'react';

interface INotificationObj {
  id: number;
  action: 'add' | 'remove';
}

interface INotificationsContext {
  queue: INotificationObj[];
  setQueue: (n: INotificationObj[]) => void;
  dispatchNotification: (n: INotificationObj) => void;
  closeNotification: (n: INotificationObj) => void;
}

const defaultValues: INotificationsContext = {
  queue: [],
  setQueue(n: INotificationObj[]) {
    console.warn('USING CONTEXT OUTSIDE OF PROVIDER');
    this.queue.push(...n);
  },
  dispatchNotification(n: INotificationObj) {
    console.warn('USING CONTEXT OUTSIDE OF PROVIDER');
    this.queue.push(n);
  },
  closeNotification(n: INotificationObj) {
    console.warn('USING CONTEXT OUTSIDE OF PROVIDER');
    this.queue.push(n);
  },
};

const NotificationsContext =
  createContext<INotificationsContext>(defaultValues);

interface INotificationsStoreProps {
  children: ReactNode;
}

const NotificationsStore: FC<INotificationsStoreProps> = ({ children }) => {
  const [queue, setQueue] = useState<INotificationObj[]>(defaultValues.queue);

  const dispatchNotification = useCallback((n: INotificationObj) => {
    setQueue((prev) => [...prev, n]);
  }, []);

  const closeNotification = useCallback((n: INotificationObj) => {
    setQueue((prev) => {
      return [...prev.filter((prev) => prev.id !== n.id)];
    });
  }, []);

  return (
    <NotificationsContext.Provider
      value={{ queue, setQueue, dispatchNotification, closeNotification }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export type {
  INotificationsContext,
  INotificationsStoreProps,
  INotificationObj,
};
export { NotificationsContext, NotificationsStore };
