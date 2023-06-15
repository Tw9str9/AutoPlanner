import Link from "next/link";
import { Facebook, Instagram } from "@mui/icons-material";
import styles from "@/styles/Social.module.css";
export default function Social() {
  return (
    <ul className={styles.social}>
      {/* <li>
        <Link href="https://www.facebook.com/AutoplanNL" target="_blank">
          <Facebook /> Facebook
        </Link>
      </li> */}
      <li>
        <Link href="https://www.instagram.com/autoplannernl/" target="_blank">
          <Instagram /> Instagram
        </Link>
      </li>
    </ul>
  );
}
