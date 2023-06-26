'use client'

import Select from "../Select/Select";
import styles from "./FilmsFilter.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Cinema } from "../Main/Main";
import { Option } from "../Select/Select";
import { emptyOption } from "../Main/Main";
// import { selectFilter } from "@/redux/features/filter/selector";
import { filterActions } from "@/redux/features/filter";

type Props = {
  cinemas: Cinema[];
  genres: Option[];
}

const FilmsFilter = ({ cinemas, genres }: Props ) => {

  const dispatch = useDispatch();

  const cinemasOtions = emptyOption.concat(cinemas.map(cinema => {
    return {title: cinema.name, value: cinema.id}
  }));

  const [movieNameFilter, setmovieNameFilter] = useState("");

  const handleNameFilter = ({target}) => {
    setmovieNameFilter(target.value);
  }

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(filterActions.filterName(movieNameFilter));
    }, 300)

    return () => {
      clearTimeout(debounce);
    }
  }, [movieNameFilter, dispatch])

  const [cinema, setCinemaValue] = useState("");

  const handleCinemaSelect = (value: string) => {
    setCinemaValue(value);

    dispatch(filterActions.filterCinemas(value));
  };
  const selectedCinema = cinemasOtions.find((item) => item.value === cinema);

  const [genre, setGenreValue] = useState("");

  const handleGenreSelect = (value: string) => {
    setGenreValue(value);

    dispatch(filterActions.filterGenres(value));
  };
  const selectedGenre = genres.find((item) => item.value === genre);


  return (
    <div className={styles.filterWrapper}>
      <p className={styles.filterTitle}>
        Фильтр поиска
      </p>
      <label className={styles.label}>
        Название
        <input
          className={styles.input}
          placeholder="Введите название"
          onChange={handleNameFilter}
          value={movieNameFilter}
        />
      </label>
      <label className={styles.label}>
        Жанр
        <Select
          options={genres}
          selected={selectedGenre || null}
          onChange={handleGenreSelect}
          placeholder="Выберите жанр"
        />
      </label>
      <label className={styles.label}>
        Кинотеатр
        <Select
          options={cinemasOtions}
          selected={selectedCinema || null}
          onChange={handleCinemaSelect}
          placeholder="Выберите кинотеатр"
        />
      </label>
    </div>
  )
};

export default FilmsFilter;
