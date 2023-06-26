'use client'

import FilmsList from "@/components/FilmsList/FilmsList";
import styles from "./page.module.css";

import { useSelector } from "react-redux";
import { selectTotalAmount, selectAllCartMovies } from "@/redux/features/cart/selector";
import { useEffect, useState } from "react";

import { useGetMoviesQuery } from "@/redux/services/movieApi";

import { MovieProp } from "../../components/FilmsListElement/FilmsListElement";

export default function Cart() {
  const totalAmount = useSelector((state) => selectTotalAmount(state));
  const allCartMoviesIds = useSelector((state) => selectAllCartMovies(state));

  // const [cartMovies, setCartMovies] = useState([]);

  // @ts-ignore
  const { data, isLoading, error } = useGetMoviesQuery();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!data || error) {
    return <span>NotFound</span>;
  }

  const cartMovies = data.filter(movie => allCartMoviesIds.includes(movie.id));

  return (
    <section className={`${styles.cart} marginTop`}>
      <FilmsList movies={cartMovies} />
      <div  className={styles.cartTotal}>
        <p className={styles.totalText}>
          Итого билетов:
        </p>
        <span className={styles.totalCount}>
          {totalAmount}
        </span>
      </div>
    </section>
  )
}
