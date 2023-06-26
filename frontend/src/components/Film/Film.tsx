import Image from "next/image";
import styles from "./Film.module.css";

import { MovieProp } from "../FilmsListElement/FilmsListElement";
import CartCounter from "../CartCounter/CartCounter";
import Rewiews from "../Rewiews/Rewiews";

type Props = {
  movie: MovieProp
}

const Film = ( {movie}: Props ) => {
  return (
    <section className={`${styles.wrapper} marginTop`}>
      <div className={styles.filmCard}>
        <Image
          className={styles.poster}
          src={movie.posterUrl}
          alt={movie.title}
          width={400}
          height={500}
        />
        <div className={styles.filmDetails}>
          <h2 className={styles.title}>
            {movie.title}
            <CartCounter movieId={movie.id} />
          </h2>
          <p className={styles.detail}>
            <span className={styles.detailTitle}>
              Жанр:
            </span>
              {movie.genre}
          </p>
          <p className={styles.detail}>
            <span className={styles.detailTitle}>
              Год выпуска:
            </span>
              {movie.releaseYear}
          </p>
          <p className={styles.detail}>
            <span className={styles.detailTitle}>
              Рейтинг:
            </span>
              {movie.rating}
          </p>
          <p className={styles.detail}>
            <span className={styles.detailTitle}>
              Режиссер:
            </span>
              {movie.director}
          </p>
          <p className={styles.descriptionTitle}>
            Описание
          </p>
          <p className={styles.description}>
            {movie.description}
          </p>
        </div>
      </div>
      <Rewiews movieId={movie.id} />
    </section>
  )
};

export default Film;
