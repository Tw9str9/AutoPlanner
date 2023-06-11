import styles from "@/styles/Car.module.css";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarMonth,
  LocalGasStation,
  Speed,
  Settings,
} from "@mui/icons-material/";

export default function Car({
  carData: {
    slug,
    imagesPath,
    make,
    model,
    price,
    year,
    fuel,
    transmission,
    km,
    sold,
  },
}) {
  // Price + KM Options
  const priceOptions = {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
  };

  const kmOptions = {
    style: "decimal",
    minimumFractionDigits: 0,
  };

  const formatter = new Intl.NumberFormat("nl-NL", kmOptions);

  return (
    <Link className={styles.car} href={`/occasions/${slug}`}>
      <div className={styles.imgContainer}>
        {sold && (
          <Image
            src="/verkocht-stamp.png"
            alt="verkocht"
            fill
            style={{ zIndex: 2, objectFit: "contain" }}
          />
        )}
        <Image
          src={`/assets/imgs/${imagesPath[0]}`}
          alt={`${make} ${model}`}
          fill
        />
      </div>
      <div className={styles.info}>
        <div className={styles.infoRow}>
          <h2>{make}</h2>
          <span>
            <h3>{price.toLocaleString("nl-NL", priceOptions) + ",-"}</h3>
          </span>
        </div>
        <div className={styles.infoRow}>
          <p>{model}</p>
          <span>
            <CalendarMonth />
            {year}
          </span>
        </div>
      </div>
      <div className={styles.specs}>
        <span>
          <LocalGasStation />
          {fuel}
        </span>
        <span>
          <Settings />
          {transmission}
        </span>
        <span>
          <Speed />
          {formatter.format(km) + " km"}
        </span>
      </div>
    </Link>
  );
}
