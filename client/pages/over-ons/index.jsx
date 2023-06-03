import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <h1>Over ons</h1>
        <p>
          AutoPlanner NL is een merkonafhankelijk autobedrijf in Ter Aar en
          richt zich op het verkopen van betrouwbare occasions tegen scherpe
          prijzen onder het kwaliteitslabel 10-voudige ''AutoPlanner''.
        </p>
        <h2>Onze missie</h2>
        <p>
          Het is onze missie om u op een eerlijke en deskundige manier te
          begeleiden bij de aankoop van uw auto. Op alle door ons aangeboden
          occasions is keuring door derden toegestaan. AutoPlanner NL geeft
          altijd openheid over de technische staat van de auto, zodat u na de
          aankoop van een occasion niet voor verrassingen komt te staan. Het
          serieus nemen van de behoefte van de consument speelt hierin een grote
          rol. Wij denken altijd in oplossingen, want bij ons staat de klant
          écht op nummer 1!
        </p>
      </div>
    </section>
  );
}
