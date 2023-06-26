import styles from "./Rewiews.module.css";
import rewiewImage from "../../assets/images/rewiew-image.jpg"
import Image from "next/image";

type Props = {
  movieId: string;
};

type Rewiews = {
  id: string;
  name: string;
  text: string;
  rating: number;
}[]


const Rewiews = async ( {movieId}: Props ) => {

  const reviews: Rewiews = await fetch(`http://localhost:3001/api/reviews?movieId=${movieId}`).then((res) => res.json());

  return (
    <ul className={styles.rewiews}>
      {
        reviews
          .map(review => (
          <li key={review.id} className={styles.rewiewItem}>
            <Image
              className={styles.rewiewImage}
              src={rewiewImage}
              alt={review.name}
              width={180}
              height={180}
            />
            <div className={styles.details}>
              <div className={styles.title}>
                <h3 className={styles.rewiewer}>
                  {review.name}
                </h3>
                <p className={styles.rating}>
                  Оценка: <span className={styles.ratingScore}>{review.rating}</span>
                </p>
              </div>
              <p className={styles.rewiewText} >
                {review.text}
              </p>
            </div>
          </li>
        ))
      }
    </ul>
  )
};

export default Rewiews;
