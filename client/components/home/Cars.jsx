import Car from "../widgets/Car";
import styles from "@/styles/Home.module.css";

export default function Cars({ carList }) {
  return (
    <section className={styles.listings}>
      <div className="container">
        <h1>Occasions</h1>
        <div className={styles.cars}>
          {carList.map((carData, i) => (
            <Car key={i} carData={carData} />
          ))}
        </div>
      </div>
    </section>
  );
}
