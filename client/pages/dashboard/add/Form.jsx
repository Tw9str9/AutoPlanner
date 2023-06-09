import { useState } from "react";
import { Send } from "@mui/icons-material";
import styles from "@/styles/Dashboard.module.css";

export default function Form() {
  const [carDetails, setCarDetails] = useState({
    plate: "",
    price: "",
    make: "",
    model: "",
    year: "",
    km: "",
    transmission: "",
    color: "",
    body: "",
    fuel: "",
    power: "",
    firstReg: "",
    doors: "",
    seats: "",
    energyLabel: "",
    load: "",
    motor: "",
    cylinders: "",
    weight: "",
    emission: "",
    btw: "",
    apk: "",
    images: [],
    desc: "",
  });

  function handleFileChange(e) {
    const files = Array.from(e.target.files);
    setCarDetails({ ...carDetails, images: files });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    // Append carDetails values
    for (const [key, value] of Object.entries(carDetails)) {
      if (key === "images") {
        value.forEach((file) => {
          formData.append("images", file);
        });
      } else {
        formData.append(key, value);
      }
    }

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/car/add`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  async function handleButtonSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `https://opendata.rdw.nl/resource/m9d7-ebf2.json?kenteken=${carDetails.plate.toUpperCase()}`
      );
      const carInfo = await response.json();

      const response2 = await fetch(
        `https://opendata.rdw.nl/resource/8ys7-d773.json?kenteken=${carDetails.plate.toUpperCase()}`
      );
      const carFuel = await response2.json();

      // Format Dates
      const dateFormatter = (dateToBeFormatted) => {
        const dateOnly = dateToBeFormatted?.split("T")[0];
        const date = new Date(dateOnly);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString("nl-NL", options) !== "Invalid Date"
          ? date.toLocaleDateString("nl-NL", options)
          : "";
      };

      setCarDetails({
        ...carDetails,
        plate: carInfo[0].kenteken || "",
        make: carInfo[0].merk || "",
        model: carInfo[0].handelsbenaming || "",
        color: carInfo[0].eerste_kleur || "",
        body: carInfo[0].inrichting || "",
        fuel: carFuel[0].brandstof_omschrijving || "",
        firstReg:
          dateFormatter(
            carInfo[0].datum_eerste_tenaamstelling_in_nederland_dt
          ) || "",
        doors: carInfo[0].aantal_deuren || "",
        seats: carInfo[0].aantal_zitplaatsen || "",
        energyLabel: carInfo[0].zuinigheidsclassificatie || "",
        load: carInfo[0].maximum_massa_trekken_ongeremd + " kg",
        motor: carInfo[0].cilinderinhoud + " cc",
        cylinders: carInfo[0].aantal_cilinders || "",
        weight: carInfo[0].massa_ledig_voertuig + " kg",
        apk: dateFormatter(carInfo[0].vervaldatum_apk_dt) || "",
      });
      console.log(carDetails);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div>
        <div>
          <label htmlFor="plate">Kenteken: </label>
          <div className={styles.plate}>
            <input
              type="text"
              name="plate"
              id="plate"
              value={carDetails.plate}
              onChange={(e) =>
                setCarDetails({ ...carDetails, plate: e.target.value })
              }
            />
            <button type="submit" onClick={handleButtonSubmit}>
              <Send />
            </button>
          </div>
        </div>
        <div>
          <label htmlFor="price">Prijs: </label>
          <input
            type="text"
            name="price"
            id="price"
            value={carDetails.price}
            onChange={(e) =>
              setCarDetails({ ...carDetails, price: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="make">Merk: </label>
          <input
            type="text"
            name="make"
            id="make"
            value={carDetails.make}
            onChange={(e) =>
              setCarDetails({ ...carDetails, make: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="model">Model: </label>
          <input
            type="text"
            name="model"
            id="model"
            value={carDetails.model}
            onChange={(e) =>
              setCarDetails({ ...carDetails, model: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="year">Bouwjaar: </label>
          <input
            type="text"
            name="year"
            id="year"
            value={carDetails.year}
            onChange={(e) =>
              setCarDetails({ ...carDetails, year: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="km">KM-stand: </label>
          <input
            type="text"
            name="km"
            id="km"
            value={carDetails.km}
            onChange={(e) =>
              setCarDetails({ ...carDetails, km: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="transmission">Transmissie: </label>
          <input
            type="text"
            name="transmission"
            id="transmission"
            value={carDetails.transmission}
            onChange={(e) =>
              setCarDetails({ ...carDetails, transmission: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="color">Kleur: </label>
          <input
            type="text"
            name="color"
            id="color"
            value={carDetails.color}
            onChange={(e) =>
              setCarDetails({ ...carDetails, color: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="body">Carrosserie: </label>
          <input
            type="text"
            name="body"
            id="body"
            value={carDetails.body}
            onChange={(e) =>
              setCarDetails({ ...carDetails, body: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="fuel">Brandstof: </label>
          <input
            type="text"
            name="fuel"
            id="fuel"
            value={carDetails.fuel}
            onChange={(e) =>
              setCarDetails({ ...carDetails, fuel: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="power">Vermogen: </label>
          <input
            type="text"
            name="power"
            id="power"
            value={carDetails.power}
            onChange={(e) =>
              setCarDetails({ ...carDetails, power: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="firstReg">Datum eerste registratie: </label>
          <input
            type="text"
            name="firstReg"
            id="firstReg"
            value={carDetails.firstReg}
            onChange={(e) =>
              setCarDetails({ ...carDetails, firstReg: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="doors">Aantal deuren </label>
          <input
            type="text"
            name="doors"
            id="doors"
            value={carDetails.doors}
            onChange={(e) =>
              setCarDetails({ ...carDetails, doors: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="seats">Aantal Zitplaatsen: </label>
          <input
            type="text"
            name="seats"
            id="seats"
            value={carDetails.seats}
            onChange={(e) =>
              setCarDetails({ ...carDetails, seats: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="energyLabel">Energielabel: </label>
          <input
            type="text"
            name="energyLabel"
            id="energyLabel"
            value={carDetails.energyLabel}
            onChange={(e) =>
              setCarDetails({ ...carDetails, energyLabel: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="load">Laadvermogen: </label>
          <input
            type="text"
            name="load"
            id="load"
            value={carDetails.load}
            onChange={(e) =>
              setCarDetails({ ...carDetails, load: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="motor">Cilinderinhoud: </label>
          <input
            type="text"
            name="motor"
            id="motor"
            value={carDetails.motor}
            onChange={(e) =>
              setCarDetails({ ...carDetails, motor: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="cylinders">Aantal cilinders: </label>
          <input
            type="text"
            name="cylinders"
            id="cylinders"
            value={carDetails.cylinders}
            onChange={(e) =>
              setCarDetails({ ...carDetails, cylinders: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="weight">Gewicht: </label>
          <input
            type="text"
            name="weight"
            id="weight"
            value={carDetails.weight}
            onChange={(e) =>
              setCarDetails({ ...carDetails, weight: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="emission">Emissieklasse: </label>
          <input
            type="text"
            name="emission"
            id="emission"
            value={carDetails.emission}
            onChange={(e) =>
              setCarDetails({ ...carDetails, emission: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <div>
          <label htmlFor="btw">BTW/Marge: </label>
          <input
            type="text"
            name="btw"
            id="btw"
            value={carDetails.btw}
            onChange={(e) =>
              setCarDetails({ ...carDetails, btw: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="apk">APK tot: </label>
          <input
            type="text"
            name="apk"
            id="apk"
            value={carDetails.apk}
            onChange={(e) =>
              setCarDetails({ ...carDetails, apk: e.target.value })
            }
          />
        </div>
      </div>
      <div>
        <label htmlFor="photos">Foto's: </label>
        <input
          type="file"
          name="photos"
          id="photos"
          multiple
          onChange={handleFileChange}
        />
      </div>
      <div>
        <label htmlFor="desc">Beschrijving: </label>
        <textarea
          name="desc"
          id="desc"
          value={carDetails.desc}
          onChange={(e) =>
            setCarDetails({ ...carDetails, desc: e.target.value })
          }
        />
      </div>
      <button type="submit">
        Verzenden <Send />
      </button>
    </form>
  );
}
