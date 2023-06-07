import { Send } from "@mui/icons-material";
import { useState } from "react";

export default function Add() {
  const [carKey, setCarKey] = useState("");
  const [carDetails, setCarDetails] = useState("");
  function handleFormSubmit(e) {
    e.preventDefault();
  }
  function handleButtonSubmit(e) {
    e.preventDefault();
    fetch(
      `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${carKey.toUpperCase()}`
    )
      .then((response) => response.json())
      .then((carInfo) => {
        setCarDetails(...carInfo);
      })
      .catch((error) => {
        console.error(error);
      });

    fetch(
      `https://opendata.rdw.nl/resource/8ys7-d773.json?kenteken=${carKey.toUpperCase()}`
    )
      .then((response) => response.json())
      .then((data) => {
        setCarDetails({ ...carDetails, ...data[0] });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  console.log(carDetails.brandstof_omschrijving);

  return (
    <div className="container">
      <h1>Auto Tevoegen</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="kenteken">Kenteken: </label>
        <input
          type="text"
          name="kenteken"
          id="kenteken"
          value={carKey}
          onChange={(e) => setCarKey(e.target.value)}
        />
        <button type="submit" onClick={handleButtonSubmit}>
          <Send />
        </button>
        <label htmlFor="titel">Titel: </label>
        <input type="text" name="titel" id="titel" />
        <label htmlFor="prijs">Prijs: </label>
        <input type="text" name="prijs" id="prijs" />
        <label htmlFor="photos">Foto's: </label>
        <input type="file" name="photos" id="photos" multiple />
        <label htmlFor="merk">Merk: </label>
        <input type="text" name="merk" id="merk" />
        <label htmlFor="km">KM-stand: </label>
        <input type="text" name="km" id="km" />
        <label htmlFor="kleur">Kleur: </label>
        <input type="text" name="kleur" id="kleur" />
        <label htmlFor="inrichting">Inrichting: </label>
        <input type="text" name="inrichting" id="inrichting" />
        <label htmlFor="versnellingsbak">Versnellingsbak: </label>
        <input type="text" name="versnellingsbak" id="versnellingsbak" />
        <label htmlFor="brandstof">Brandstof: </label>
        <input
          type="text"
          name="brandstof"
          id="brandstof"
          value={carDetails.brandstof_omschrijving}
        />
        <label htmlFor="vermogen">Vermogen: </label>
        <input type="text" name="vermogen" id="vermogen" />
        <label htmlFor="eersteToelating">Datum eerste registratie: </label>
        <input type="text" name="EersteToelating" id="EersteToelating" />
        <label htmlFor="aantalDeuren">Aantal deuren </label>
        <input type="text" name="aantalDeuren" id="aantalDeuren" />
        <label htmlFor="aantalZitplaatsen">Aantal Zitplaatsen: </label>
        <input type="text" name="aantalZitplaatsen" id="km" />
        <label htmlFor="laadvermogen">Laadvermogen: </label>
        <input type="text" name="laadvermogen" id="laadvermogen" />
        <label htmlFor="cilinderinhoud">Cilinderinhoud: </label>
        <input type="text" name="cilinderinhoud" id="cilinderinhoud" />
        <label htmlFor="aantalCilinders">Aantal cilinders: </label>
        <input type="text" name="aantalCilinders" id="aantalCilinders" />
        <label htmlFor="gewicht">Gewicht: </label>
        <input type="text" name="gewicht" id="gewicht" />
        <label htmlFor="btw">BTW/Marge: </label>
        <input type="text" name="btw" id="btw" />
        <label htmlFor="apk">APK: </label>
        <input type="text" name="apk" id="apk" />
        <label htmlFor="beschrijving">Beschrijving: </label>
        <textarea name="beschrijving" id="beschrijving"></textarea>
        <button type="submit">
          Verzenden <Send />
        </button>
      </form>
    </div>
  );
}
