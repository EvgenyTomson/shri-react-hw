import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="/faq" className={styles.link} >
        Вопросы-ответы
      </Link>
      <Link href="/about-us" className={styles.link} >
        О нас
      </Link>
    </footer>
  )
};

export default Footer;
