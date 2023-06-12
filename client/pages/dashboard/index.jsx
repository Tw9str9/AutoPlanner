import React, { useState } from "react";
import ManageCars from "@/components/dashboard/ManageCars";
import ManageContent from "@/components/dashboard/ManageContent";
import ManagePhotos from "@/components/dashboard/ManagePhotos";
import ManageReviews from "@/components/dashboard/ManageReviews";
import Menu from "@/components/dashboard/Menu";
import { useRouter } from "next/router";
import styles from "@/styles/Dashboard.module.css";

export default function Dashboard({ carList }) {
  const [active, setActive] = useState("ManageContent");

  const renderComponent = () => {
    switch (active) {
      case "ManageContent":
        return <ManageContent />;
      case "ManageCars":
        return <ManageCars carList={carList} />;
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
