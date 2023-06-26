import Film from "@/components/Film/Film";

import { MovieProp } from "../../../components/FilmsListElement/FilmsListElement";

type Props = {
  params: {
    id: string;
  }
};

export default async function Movie({ params: { id } }: Props) {
  const movie: MovieProp = await fetch(`http://localhost:3001/api/movie?movieId=${id}`).then((res) => res.json());

  return (
    <Film movie={movie} />
  )
}
