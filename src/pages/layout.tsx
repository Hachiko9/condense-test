import { Header } from '@/components/header';
import styles from './pages.module.css';
import '../app/globals.css';
import { NotificationsStore } from '@/components/notificationsManager/notificationsContext';
import NotificationsManager from '@/components/notificationsManager';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <NotificationsStore>
        <Header />
        <NotificationsManager />
        {children}
      </NotificationsStore>
    </div>
  );
}
