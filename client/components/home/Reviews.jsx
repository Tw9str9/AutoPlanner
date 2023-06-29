import Link from "next/link";
import Review from "../widgets/Review";
import Slider from "../widgets/Slider";
import styles from "@/styles/Home.module.css";

export default function Reviews({ reviewList }) {
  const reversedReviewList = [...reviewList].reverse();
  return (
    <section className={styles.reviews}>
      <div className="container">
        <h1>Wat klanten over ons zeggen</h1>
        <div className={styles.reviewsContainer}>
          <Slider>
            {reversedReviewList?.map((review, i) => (
              <Review key={i} review={review} />
            ))}
          </Slider>
        </div>
        <div className={styles.btn}>
          <Link href="/reviews/add">Plaats een review</Link>
        </div>
      </div>
    </section>
  );
}
