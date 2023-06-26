import FilmsFilter from '../FilmsFilter/FilmFilter';
import FilmsList from '../FilmsList/FilmsList';
import styles from "./Main.module.css";

import { MovieProp } from "../FilmsListElement/FilmsListElement";
import { Option } from "../Select/Select";

export type Cinema = {
  id: string;
  name: string;
  movieIds: string[];
};

export const emptyOption: Option[] = [
  {
    title: 'Не выбрано',
    value: ''
  }
];

const Main = async () => {

  const movies: MovieProp[] = await fetch(`http://localhost:3001/api/movies`).then((res) => res.json());
  const cinemas: Cinema[] = await fetch(`http://localhost:3001/api/cinemas`).then((res) => res.json());

  const genres: Option[] = emptyOption.concat(Array.from(new Set(movies.map(movie => movie.genre))).map(genre => {
    return {title: genre, value: genre}
  }));

  return (
    <main className={`${styles.main} marginTop`}>
      <FilmsFilter cinemas={cinemas} genres={genres} />
      <FilmsList movies={movies} />
    </main>
  )
};

export default Main;
