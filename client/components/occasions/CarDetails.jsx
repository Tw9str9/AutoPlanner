import { useState } from "react";
import Panel from "@/components/widgets/Panel";
import Slider from "@/components/widgets/Slider";
import ContactInfo from "@/components/widgets/ContactInfo";
import Map from "@/components/widgets/Map";
import Image from "next/image";
import styles from "@/styles/CarDetails.module.css";
import {
  CalendarMonth,
  LocalGasStation,
  Speed,
  Settings,
} from "@mui/icons-material/";

export default function CarDetails({
  car: {
    slug,
    plate,
    price,
    make,
    model,
    year,
    km,
    transmission,
    color,
    body,
    fuel,
    power,
    firstReg,
    doors,
    seats,
    energyLabel,
    load,
    motor,
    cylinders,
    weight,
    emission,
    btw,
    apk,
    imagesPath,
    desc,
  },
}) {
  const [currentImg, setCurrentImg] = useState(1);

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

  function handleImgClick(i) {
    setCurrentImg(i + 1);
  }

  return (
    <section className={styles.carDetails}>
      <div className="container">
        <Panel slug={slug} make={make} />
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <div className={styles.sliderContainer}>
              <Slider currentImg={currentImg} totalImgs={imagesPath.length}>
                {imagesPath.map((img) => (
                  <div key={img} className={styles.imgContainer}>
                    <Image
                      src={`/assets/imgs/${img}`}
                      alt={`${make} ${model}`}
                      fill
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className={styles.thumbs}>
              <Slider>
                {imagesPath.map((img, i) => (
                  <div key={img} className={styles.imgContainer}>
                    <Image
                      src={`/assets/imgs/${img}`}
                      alt={`${make} ${model}`}
                      fill
                      onClick={() => handleImgClick(i)}
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <div className={styles.contact}>
              <ContactInfo whatsapp email />
            </div>
          </div>
          <div className={styles.carInfoCol}>
            <h1 className={styles.title}>
              {make} {model}
            </h1>
            <div className={styles.carInfoRow}>
              <span>
                <CalendarMonth />
                {year}
              </span>
              <span>
                <Speed />
                {formatter.format(km) + " km"}
              </span>
              <span>
                <Settings />
                {transmission}
              </span>
              <span>
                <LocalGasStation />
                {fuel}
              </span>
            </div>
            <div className={styles.price}>
              <span>{price.toLocaleString("nl-NL", priceOptions) + ",-"}</span>
            </div>
            <div className={styles.carInfo}>
              <div>
                <span>Kenteken: </span>
                <span>{plate}</span>
              </div>
              <div>
                <span>Model: </span>
                <span>{model}</span>
              </div>
              <div>
                <span>Kleur: </span>
                <span>{color}</span>
              </div>
              <div>
                <span>Carrosserie: </span>
                <span>{body}</span>
              </div>
              <div>
                <span>Vermogen: </span>
                <span>{power}</span>
              </div>
              <div>
                <span>Datum registratie Nederland: </span>
                <span>{firstReg}</span>
              </div>
              <div>
                <span>Aantal deuren: </span>
                <span>{doors}</span>
              </div>
              <div>
                <span>Aantal zitplaatsen: </span>
                <span>{seats}</span>
              </div>
              <div>
                <span>Energielabel: </span>
                <span>{energyLabel}</span>
              </div>
              <div>
                <span>Laadvermogen: </span>
                <span>{load}</span>
              </div>
              <div>
                <span>Cilinderinhoud: </span>
                <span>{motor}</span>
              </div>
              <div>
                <span>Aantal cilinders: </span>
                <span>{cylinders}</span>
              </div>
              <div>
                <span>Gewicht : </span>
                <span>{weight}</span>
              </div>
              <div>
                <span>Emissieklasse: </span>
                <span>{emission}</span>
              </div>
              <div>
                <span>BTW/Marge: </span>
                <span>{btw}</span>
              </div>
              <div>
                <span>APK tot: </span>
                <span>{apk}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.desc}>
          <h2>Beschrijving</h2>
          <p>{desc}</p>
        </div>
        <div className={styles.location}>
          <h2>Locatie</h2>
          <Map />
        </div>
      </div>
    </section>
  );
}
