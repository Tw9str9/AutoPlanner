import { useState } from "react";
import { FormatQuote, Delete, Check } from "@mui/icons-material";
import styles from "@/styles/Dashboard.module.css";

export default function ManageReviews({ reviewList }) {
  const [reviews, setReviews] = useState(reviewList);
  const reversedReviewList = [...reviews].reverse();

  async function handleReviewSold(id) {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/review/approve/${id}`,
        {
          method: "PATCH",
        }
      );
      setReviews(
        reviews.map((review) =>
          review._id === id ? { ...review, approved: !review.approved } : review
        )
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function handleReviewDelete(id) {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/review/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      setReviews((prevReviews) =>
        prevReviews.filter((review) => review._id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className={styles.manageReviews}>
      <h1>Reviews beheren</h1>
      <div className={styles.reviewsContainer}>
        {reversedReviewList?.map((review, i) => (
          <div key={i} className={styles.review}>
            <h2>{review.name}</h2>
            <FormatQuote />
            <p>{review.message}</p>
            <div className={styles.manageReview}>
              {!review.approved && (
                <button onClick={() => handleReviewSold(review._id)}>
                  <Check />
                </button>
              )}
              <button onClick={() => handleReviewDelete(review._id)}>
                <Delete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
