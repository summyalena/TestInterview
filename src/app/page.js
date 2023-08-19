import Login from "@/components/Layouts/Login";
import Navigation from "@/components/Layouts/Navigation";
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <Login />
    </div>
  );
}
