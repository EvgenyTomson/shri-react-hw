import Link from "next/link";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={styles.logo}>
      Билетопоиск
    </Link>
  )
};

export default Logo;
