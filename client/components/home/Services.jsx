import styles from "@/styles/Home.module.css";
import Link from "next/link";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <h1>Diensten</h1>
        {/* <div className="service">
          <Link href="/contact">Voordelen</Link>
          <Link href="/contact">Garantie</Link>
          <Link href="/contact">Inkopen</Link>
          <Link href="/contact">Auto Importeren</Link>
        </div> */}
      </div>
    </section>
  );
}
