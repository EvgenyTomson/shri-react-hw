'use client'

import Image from "next/image";
import styles from "./FilmsListElement.module.css";
import CartCounter from "../CartCounter/CartCounter";
import Link from "next/link";

export type MovieProp = {
  title: string;
  posterUrl: string;
  releaseYear: number;
  description: string;
  genre: string;
  id: string;
  rating: number;
  director: string;
  reviewIds: string[];
}

type Props = {
  movie: MovieProp
}

const FilmsListElement = ( {movie}: Props ) => {

  return (
    <li className={styles.movie}>
      <Image
        className={styles.poster}
        src={movie.posterUrl}
        alt={movie.title}
        width={100}
        height={120}
      />
      <div className={styles.description}>
        <Link
          className={styles.title}
          href={`/movie/${movie.id}`}
        >
          {movie.title}
        </Link>
        <p className={styles.genre}>
          {movie.genre}
        </p>
      </div>
      <CartCounter movieId={movie.id} />
    </li>
  )
};

export default FilmsListElement;
