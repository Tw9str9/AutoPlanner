import React, { useState } from "react";
import ManageCars from "./ManageCars";
import ManageContent from "./ManageContent";
import ManagePhotos from "./ManagePhotos";
import ManageReviews from "./ManageReviews";
import Menu from "./Menu";
import styles from "@/styles/Dashboard.module.css";

export default function Dashboard() {
  const [active, setActive] = useState("ManageContent");

  const renderComponent = () => {
    switch (active) {
      case "ManageContent":
        return <ManageContent />;
      case "ManageCars":
        return <ManageCars />;
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
