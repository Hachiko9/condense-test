import { Header } from '@/components/header';
import styles from './pages.module.css';
import { NotificationsProvider } from '@/components/notificationsManager/notificationsContext';
import { NotificationsManager } from '@/components/notificationsManager';
import '../app/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <NotificationsProvider>
        <Header />

        <NotificationsManager />

        {children}
      </NotificationsProvider>
    </div>
  );
}
