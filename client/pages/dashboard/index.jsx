import React, { useState } from "react";
import ManageCars from "./ManageCars";
import ManageContent from "./ManageContent";
import ManagePhotos from "./ManagePhotos";
import ManageReviews from "./ManageReviews";
import Menu from "./Menu";
import styles from "@/styles/Dashboard.module.css";

export default function Dashboard({ cars }) {
  const [active, setActive] = useState("ManageContent");

  const renderComponent = () => {
    switch (active) {
      case "ManageContent":
        return <ManageContent />;
      case "ManageCars":
        return <ManageCars cars={cars} />;
      case "ManageReviews":
        return <ManageReviews />;
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
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars`
    );

    const cars = await carsResponse.json();
    const photos = await photosResponse.json();
    const reviews = await reviewsResponse.json();

    return {
      props: {
        cars,
        photos,
        reviews,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        cars: null,
        photos: null,
        reviews: null,
        error: "Failed to fetch data",
      },
    };
  }
}
