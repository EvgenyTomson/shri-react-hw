import FaqList from "@/components/FaqList/FaqList";
import styles from "./page.module.css";

export default function Faq() {
  return (
    <section className={`${styles.faq} marginTop`}>
      <h2 className={styles.title}>
        Вопросы-ответы
      </h2>
      <FaqList />
    </section>
  )
}
