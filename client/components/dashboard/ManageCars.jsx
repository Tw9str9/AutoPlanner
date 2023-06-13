import { AddBoxOutlined, Delete, Sell } from "@mui/icons-material";
import Link from "next/link";
import Car from "@/components/widgets/Car";
import styles from "@/styles/Dashboard.module.css";
import { useState } from "react";

export default function ManageCars({ carList }) {
  const [cars, setCars] = useState(carList);

  async function handleCarSold(id) {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/car/update/${id}`,
        {
          method: "PATCH",
        }
      );
      setCars(
        cars.map((car) => (car._id === id ? { ...car, sold: !car.sold } : car))
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function handleCarDelete(id) {
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/car/delete/${id}`,
        {
          method: "DELETE",
        }
      );
      setCars((prevCars) => prevCars.filter((car) => car._id !== id));
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className={styles.manageCars}>
      <h1>Occasions beheren</h1>
      <div>
        <div className={styles.add}>
          <Link href="dashboard/add">
            <AddBoxOutlined />
          </Link>
        </div>
        {cars?.map((carData, i) => (
          <div key={i}>
            <Car carData={carData} />
            <div className={styles.manage}>
              <button onClick={() => handleCarSold(carData._id)}>
                <Sell />
              </button>
              <button onClick={() => handleCarDelete(carData._id)}>
                <Delete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
