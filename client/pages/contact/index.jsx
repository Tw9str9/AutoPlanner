import ContactInfo from "@/components/widgets/ContactInfo";
import SendIcon from "@mui/icons-material/Send";
import Panel from "@/components/widgets/Panel";
import Map from "@/components/widgets/Map";
import styles from "@/styles/Contact.module.css";

export default function Contact() {
  function handleFormSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className={styles.contactPage}>
      <div className="container">
        <Panel />
        <h1>Contact opnemen</h1>
        <div className={styles.contact}>
          <div className={styles.contactCol}>
            <h2>Contactgegevens</h2>
            <ContactInfo time address whatsapp email />
            <p>Bezichtiging uitsluitend op telefonische afspraak</p>
            <Map />
          </div>
          <form onSubmit={handleFormSubmit}>
            <div>
              <div className="field">
                <label htmlFor="firstName">Voornaam: </label>
                <input type="text" name="firstName" id="firstName" />
              </div>
              <div className="field">
                <label htmlFor="lastName">Achternaam: </label>
                <input type="text" name="lastName" id="lastName" />
              </div>
            </div>
            <div>
              <div className="field">
                <label htmlFor="subject">Onderwerp: </label>
                <input type="text" name="subject" id="subject" />
              </div>
              <div className="field">
                <label htmlFor="phone">
                  Telefoonnummer: <span>(optioneel)</span>
                </label>
                <input type="text" name="phone" id="phone" />
              </div>
            </div>
            <div className="field">
              <label htmlFor="email">E-mailadres: </label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Bericht: </label>
              <textarea name="message" id="message"></textarea>
            </div>
            <button type="submit">
              Verzenden <SendIcon />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
