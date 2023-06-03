import ContactInfo from "@/components/widgets/ContactInfo";
import Form from "./Form";
import styles from "@/styles/Contact.module.css";
import Map from "@/components/widgets/Map";
export default function Contact() {
  return (
    <section className={styles.conactPage}>
      <div className="container">
        <h1>Contact opnemen</h1>
        <div className={styles.contact}>
          <div className={styles.contactCol}>
            <h2>Contactgegevens</h2>
            <ContactInfo whatsapp email />
            <p>Bezichtiging uitsluitend op telefonische afspraak</p>
            <Map />
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
