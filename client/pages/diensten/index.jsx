import Panel from "@/components/widgets/Panel";
import ContactInfo from "@/components/widgets/ContactInfo";
import Map from "@/components/widgets/Map";
import styles from "@/styles/Services.module.css";
import Social from "@/components/widgets/Social";

export default function Diensten() {
  return (
    <section className={styles.services}>
      <div className="container">
        <Panel />
        <h1>Diensten</h1>
        <section id="garantie">
          <h2>Garantie</h2>
          <div className={styles.bundles}>
            <div>
              <h3>Uw nieuwe auto wordt standaard afgeleverd met:</h3>
              <ul>
                <li>Het volledige importproces</li>
                <li>Geldige APK-keuring</li>
                <li> RDW vrijwaringsbewijs van eventuele inruilauto</li>
                <li>Tenaamstelling van de "nieuwe" auto</li>
              </ul>
              <p>
                Zolang u in het bezit bent van de bij ons gekochte auto,
                repareert onze garage deze bij storing of defect tegen een
                vooraf afgesproken sterk gereduceerd tarief. Indien beschikbaar
                krijgt u na het maken van een afspraak een gratis leenauto.
              </p>
            </div>
            <div>
              <p>
                Wij hebben vertrouwen in onze auto's en staan voor onze kennis
                en vaardigheden als autoinkopers. Wanneer een auto rijklaar
                wordt gemaakt voor aflevering, is dat echter een momentopname.
                Daarom bieden wij u 12 weken garantie aan, omdat wij willen dat
                u 100% tevreden bent!
              </p>
              <ul>
                <li>12 weken garantie op de motor en versnellingsbak</li>
                <li>Maximale gereden afstand van 10.000 km</li>
              </ul>
              <p>
                De garantie omvat uitsluitend de nokkenas, kleppen,
                distributieriem, cilinderkop, koppakking, zuigers, zuigerveren,
                oliepomp, de complete krukas, en alle versnellingen en
                synchromeshes.
              </p>
            </div>
          </div>
        </section>
        <section id="inkopen">
          <h2>Inkopen</h2>
          <p>
            Wij kopen uw voertuig tegen het beste bod. Het maakt bij ons niet
            uit wat voor een voertuig u wil verkopen, zowel auto’s als
            bestelauto's. Bij ons verkoopt u uw voertuig snel en eenvoudig,
            ongeacht het merk, de staat of bouwjaar. Door uw voertuig te
            verkopen via ons bespaart u veel tijd en energie. Bent u
            nieuwsgierig naar het beste bod voor uw voertuig? Whatsapp of e-mail
            dan nu foto's van uw auto + kmstand + kenteken en ontvang binnen een
            uur een bod. Om het nog gemakkelijker te maken voor u, kunt u
            vervolgens direct een afspraak maken bij onze vestiging in Ter Aar.
            Ook is het mogelijk dat wij de auto bij u op locatie komen ophalen
            en de auto ter plekke vrijwaren. En dit alles geheel gratis en
            vrijblijvend!
          </p>
          <div className={styles.contact}>
            <ContactInfo whatsapp email />
          </div>
        </section>
        <section id="importeren">
          <h2>Auto importeren</h2>
          <div className={styles.features}>
            <p>
              Hulp nodig bij het importeren van een auto uit Duitsland of
              België? Bent u van plan om een auto te kopen in het buitenland en
              deze te importeren? Dan dient u belasting personenauto's en
              motorrijwielen betalen (BPM). Ook moet de import auto worden
              gekeurd door een RDW keuringsstation. Wij hebben veel ervaring met
              het importeren van auto's uit het buitenland. Doordat het
              importproces niet eenvoudig is, kunt u gebruik maken van onze
              importservice. Kies uit één van onze importpakketten en u bent er
              van verzekerd dat u zo snel mogelijk met uw auto de weg op kunt.
            </p>
            <div>
              <h3>Onze voordelen op een rij:</h3>
              <ul>
                <li>RDW keuring binnen 24 uur (versneld traject)</li>
                <li>BPM-aangifteformulier</li>
                <li>Wij komen langs op locatie</li>
                <li>Wij bieden de voordeligste pakketprijzen</li>
                <li>Wij nemen het gehele importtraject uit handen</li>
                <li>Altijd levering van luxe kentekenplaten</li>
              </ul>
            </div>
          </div>
          <div className={styles.bundles}>
            <div>
              <h3>All in pakket</h3>
              <ul>
                <li>Dossier in orde maken</li>
                <li>Aanvraag indienen bij RDW</li>
                <li>BPM-tarief met laagste bpm-garantie berekenen</li>
                <li>BPM-aangifte bij belastingdienst</li>
                <li>Levering van luxe kentekenplaten</li>
              </ul>
              <div>200 eur</div>
            </div>
            <div>
              <h3>All-in pakket Plus</h3>
              <ul>
                <li>Dossier in orde maken</li>
                <li>Aanvraag indienen bij RDW</li>
                <li>
                  BPM-tarief met laagste bpm-garantie berekenen op basis van
                  taxatierapport
                </li>
                <li>BPM-aangifte bij belastingdienst</li>
                <li>Levering van luxe kentekenplaten</li>
              </ul>
              <div>200 eur</div>
            </div>
          </div>
          <div className={styles.features}>
            <div>
              <h3>All-in pakket Premium</h3>
              <ul>
                <li>Dossier in orde maken</li>
                <li>Aanvraag indienen bij RDW</li>
                <li>
                  BPM-tarief met laagste bpm-garantie berekenen op basis van
                  taxatierapport
                </li>
                <li>BPM-aangifte bij belastingdienst</li>
                <li>Levering van luxe kentekenplaten</li>
                <li> Transport van de geïmporteerde auto**</li>
              </ul>
              <div>200 eur</div>
            </div>
            <p>
              *De legeskosten/recyclingsbijdrage van de RDW (132 euro) en de
              BPM-aangifte (28,50 euro) zijn niet inbegrepen, alle benoemde
              prijzen zijn exclusief btw.
              <br />
              **Transport van de geïmporteerde auto tot 350 km vanaf Utrecht.
              Bij afstanden daarboven wordt een ander tarief berekend. Neem
              contact met ons op voor het exacte bedrag.
            </p>
          </div>
        </section>
        <div className={styles.social}>
          <h2>Volg ons</h2>
          <Social />
        </div>
        <Map />
      </div>
    </section>
  );
}
