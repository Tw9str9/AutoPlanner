import Panel from "@/components/widgets/Panel";
import Review from "@/components/widgets/Review";
import styles from "@/styles/Reviews.module.css";

export default function Reviews({ reviewList }) {
  const reversedReviewList = [...reviewList].reverse();

  return (
    <section className={styles.reviewPage}>
      <div className="container">
        <Panel />
        <h1>Reviews</h1>
        <div className={styles.reviewContainer}>
          {reversedReviewList?.map((review, i) => (
            <Review key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  try {
    const reviewsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/review`
    );
    const reviewList = await reviewsResponse.json();

    return {
      props: {
        reviewList,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        reviewList: null,
        error: "Failed to fetch data",
      },
    };
  }
}
