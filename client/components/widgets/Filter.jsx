import { ArrowDropDown } from "@mui/icons-material";
import Link from "next/link";
import styles from "@/styles/Panel.module.css";

export default function Filter() {
  return (
    <div className={styles.filter}>
      <div>
        Sorteren
        <ArrowDropDown />
      </div>
      <ul>
        <li>
          <Link href="?sort=price&direction=asc">Prijs oplopend</Link>
        </li>
        <li>
          <Link href="?sort=price&direction=desc">Prijs aflopend</Link>
        </li>
        <li>
          <Link href={`?sort=km&direction=asc`}>KM stand oplopend</Link>
        </li>
        <li>
          <Link href={`?sort=km&direction=desc`}>KM stand aflopend</Link>
        </li>
        <li>
          <Link href={`?sort=year&direction=asc`}>Bouwjaar oplopend</Link>
        </li>
        <li>
          <Link href={`?sort=year&direction=desc`}>Bouwjaar aflopend</Link>
        </li>
      </ul>
    </div>
  );
}
