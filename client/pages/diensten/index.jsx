import ContactInfo from "@/components/widgets/ContactInfo";
import Map from "@/components/widgets/Map";
import styles from "@/styles/Services.module.css";

export default function Diensten() {
  return (
    <section className={styles.services}>
      <div className="container">
        <h1>Diensten</h1>
        <h3>To do:</h3>
        <p>Garantie</p>
        <p>Inkopen</p>
        <p>Auto importeren</p>
        <Map />
        <ContactInfo whatsapp email />
      </div>
    </section>
  );
}
