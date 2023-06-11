import Breadcrumb from "./Breadcrumb";
import Filter from "./Filter";
import styles from "@/styles/Panel.module.css";

export default function Panel({ filter }) {
  return (
    <div className={styles.panel}>
      <Breadcrumb />
      {filter && <Filter />}
    </div>
  );
}
