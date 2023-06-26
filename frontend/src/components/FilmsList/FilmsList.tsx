'use client'

import styles from "./FilmsList.module.css";

import FilmsListElement from "../FilmsListElement/FilmsListElement";
import { MovieProp } from "../FilmsListElement/FilmsListElement";
import { useSelector } from "react-redux";
import { selectCinemaFilter } from "@/redux/features/filter/selector";
import { selectGenreFilter } from "@/redux/features/filter/selector";
import { selectNameFilter } from "@/redux/features/filter/selector";

import { useEffect, useState } from "react";

type Props = {
  movies: MovieProp[];
};

const FilmsList = ( {movies}: Props ) => {

  const [currentMovies, setCurrentMovies] = useState(movies);

  const cinemaSelector = useSelector((state) => selectCinemaFilter(state));
  const currentNameFilter = useSelector((state) => selectNameFilter(state));
  const currentGenre = useSelector((state) => selectGenreFilter(state));

  useEffect(() => {
    if (!cinemaSelector) {
      setCurrentMovies(movies);
      return;
    }

    fetch(`http://localhost:3001/api/movies?cinemaId=${cinemaSelector}`)
      .then(res => res.json())
      .then(cinemaMovies => {
        setCurrentMovies(cinemaMovies);
      })

  }, [cinemaSelector, movies])

  useEffect(() => {
    let newMovies = movies;

    if (currentNameFilter) {
      newMovies = movies.filter(movie => {
        return movie.title.toLowerCase().includes(currentNameFilter.toLowerCase());
      })
    }

    if (!currentGenre) {
      setCurrentMovies(newMovies);
      return;
    }

    const genreMovies = newMovies.filter(movie => {
      return movie.genre === currentGenre;
    });

    setCurrentMovies(genreMovies);
  }, [currentGenre, currentNameFilter, movies])

  return (
    <ul className={styles.filmList}>
      {
        currentMovies
          .map(movie => <FilmsListElement key={movie.id} movie={movie} />)
      }
    </ul>
  )
};

export default FilmsList;
