import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Services() {
  return (
    <section className={styles.services}>
      <div className="container">
        <h1>Onze diensten</h1>
        <div className={styles.servicesContainer}>
          <Link href="/diensten#voordelen">
            <h2>Ontdek onze voordelen:</h2>
            <ul>
              <li>Gegarandeerde kmstanden</li>
              <li>Voorzien van minimaal 6 maanden APK</li>
              <li>Algehele veiligheidscontrole</li>
              <li>Geen afleveringskosten</li>
              <li>Inruil van uw auto is altijd mogelijk</li>
              <li>Gratis overschrijven op locatie</li>
              <li>Laagste prijs garantie</li>
            </ul>
            <div>
              <button>Meer Informatie</button>
            </div>
          </Link>
          <Link href="/diensten#garantie">
            <h2>Ontdek onze uitgebreide garantiepakketten</h2>
            <ul>
              <li>Het volledige importproces</li>
              <li>Geldige APK-keuring</li>
              <li>Tenaamstelling van de "nieuwe" auto</li>
              <li>12 weken garantie op de motor en versnellingsbak</li>
              <li>Maximale gereden afstand van 10.000 km</li>
            </ul>
            <div>
              <button>Meer Informatie</button>
            </div>
          </Link>
          <Link href="/diensten#inkopen">
            <h2>Verkoop uw voertuig gemakkelijk en snel:</h2>
            <p>
              Wij kopen uw voertuig tegen het beste bod. Het maakt bij ons niet
              uit wat voor een voertuig u wil verkopen, zowel auto’s als
              bestelauto's. Bij ons verkoopt u uw voertuig snel en eenvoudig,
              ongeacht het merk, de staat of bouwjaar. Door uw voertuig te
              verkopen via ons bespaart u veel tijd en energie.
            </p>
            <div>
              <button>Meer Informatie</button>
            </div>
          </Link>
          <Link href="/diensten#importeren">
            <h2>Auto Importeren:</h2>
            <ul>
              <li>RDW keuring binnen 24 uur (versneld traject)</li>
              <li>BPM-aangifteformulier</li>
              <li>Wij komen langs op locatie</li>
              <li>Wij bieden de voordeligste pakketprijzen</li>
              <li>Wij nemen het gehele importtraject uit handen</li>
              <li>Altijd levering van luxe kentekenplaten</li>
            </ul>
            <div>
              <button>Meer Informatie</button>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
