import Car from "../widgets/Car";
import styles from "@/styles/Home.module.css";

export default function Cars() {
  return (
    <section className={styles.listings}>
      <div className="container">
        <h1>Occasions</h1>
        <div className={styles.cars}>
          <Car />
          <Car />
          <Car />
          <Car />
          <Car />
          <Car />
        </div>
      </div>
    </section>
  );
}
