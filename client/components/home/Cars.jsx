import Car from "../widgets/Car";
import Slider from "../widgets/Slider";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Cars({ carList }) {
  return (
    <section className={styles.listings}>
      <div className="container">
        <h1>Occasions</h1>
        {!carList ? (
          <div>Not Found</div>
        ) : (
          <div className={styles.cars}>
            <Slider>
              {carList.map((carData, i) => (
                <Car key={i} carData={carData} />
              ))}
            </Slider>
          </div>
        )}
        <div className={styles.btn}>
          <Link href="/occasions">collectie bekijken</Link>
        </div>
      </div>
    </section>
  );
}
