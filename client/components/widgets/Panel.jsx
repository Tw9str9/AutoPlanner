import Breadcrumb from "./Breadcrumb";
import Filter from "./Filter";
import styles from "@/styles/Panel.module.css";

export default function Panel({ filter, slug, make }) {
  return (
    <div className={styles.panel}>
      <Breadcrumb slug={slug} make={make} />
      {filter && <Filter />}
    </div>
  );
}
