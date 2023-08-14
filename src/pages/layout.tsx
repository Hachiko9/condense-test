import { Header } from '@/components/header';
import styles from './pages.module.css';
import '../app/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  );
}
