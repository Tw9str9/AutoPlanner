import styles from "@/styles/Car.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarMonth,
  LocalGasStation,
  Speed,
  Settings,
} from "@mui/icons-material/";

export default function Car() {
  return (
    <Link className={styles.car} href="">
      <div className={styles.imgContainer}>
        <Image src="/background-1.jpg" alt="test" fill />
      </div>
      <div className={styles.info}>
        <div className={styles.infoRow}>
          <h2>Car Make</h2>
          <span>
            <h3>$2000</h3>
          </span>
        </div>
        <div className={styles.infoRow}>
          <p>New test</p>
          <span>
            <CalendarMonth />
            2004
          </span>
        </div>
      </div>
      <div className={styles.specs}>
        <span>
          <LocalGasStation />
          Benzine
        </span>
        <span>
          <Settings />
          Handgeschakeld
        </span>
        <span>
          <Speed />
          244000km
        </span>
      </div>
    </Link>
  );
}
