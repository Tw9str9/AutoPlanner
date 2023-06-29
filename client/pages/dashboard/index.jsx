import { useEffect, useState } from "react";
import ManageCars from "@/components/dashboard/ManageCars";
import ManageContent from "@/components/dashboard/ManageContent";
import ManagePhotos from "@/components/dashboard/ManagePhotos";
import ManageReviews from "@/components/dashboard/ManageReviews";
import Menu from "@/components/dashboard/Menu";
import styles from "@/styles/Dashboard.module.css";

export default function Dashboard({ carList, reviewList }) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const storedValue = window.localStorage.getItem("manage");
    if (storedValue) {
      setActive(storedValue);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("manage", active);
  }, [active]);

  const renderComponent = () => {
    switch (active) {
      case "ManageContent":
        return <ManageContent />;
      case "ManageCars":
        return <ManageCars carList={carList} />;
      case "ManageReviews":
        return <ManageReviews reviewList={reviewList} />;
      case "ManagePhotos":
        return <ManagePhotos />;
      default:
        return <ManageContent />;
    }
  };

  return (
    <section className={styles.dashboard}>
      <Menu setActive={setActive} />
      {renderComponent()}
    </section>
  );
}

export async function getServerSideProps() {
  try {
    const carsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars`
    );
    const photosResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars`
    );
    const reviewsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/review`
    );

    const carList = await carsResponse.json();
    const photoList = await photosResponse.json();
    const reviewList = await reviewsResponse.json();

    return {
      props: {
        carList,
        photoList,
        reviewList,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        carList: null,
        photoList: null,
        reviewList: null,
        error: "Failed to fetch data",
      },
    };
  }
}
