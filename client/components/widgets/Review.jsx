import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import styles from "@/styles/Review.module.css";

export default function Review({
  review: { name, message, approved, createdAt },
}) {
  const dateObj = new Date(createdAt);
  const formattedDate = dateObj.toLocaleDateString();

  return (
    approved && (
      <div className={styles.review}>
        <p className={styles.date}>{formattedDate}</p>
        <h2>{name}</h2>
        <FormatQuoteIcon />
        <p className={styles.message}>{message}</p>
      </div>
    )
  );
}
