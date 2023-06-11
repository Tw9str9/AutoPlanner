import Car from "../widgets/Car";
import styles from "@/styles/Home.module.css";
import Slider from "../widgets/Slider";

export default function Cars({ carList }) {
  return (
    <section className={styles.listings}>
      <div className="container">
        <h1>Occasions</h1>
        <div className={styles.cars}>
          <Slider>
            {carList.map((carData, i) => (
              <Car key={i} carData={carData} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
