import Link from "next/link";
import Background from "../widgets/Background";
import styles from "@/styles/Home.module.css";

export default function Hero() {
  return (
    <Background className={styles.hero} imgSrc="background-2.jpg">
      <div className="container">
        <div className={styles.heroContent}>
          <h1 className="hero-heading">
            Vind uw <span>droomauto</span> vandaag nog!
          </h1>
          <h2 className="hero-subheading">
            Ontdek de perfecte occasion bij Auto<span>Planner </span>NL - Uw
            vertrouwde partner voor hoogwaardige auto's tegen scherpe prijzen!
          </h2>
          <Link href="/occasions">Bekijk ons aanbod</Link>
        </div>
      </div>
    </Background>
  );
}
