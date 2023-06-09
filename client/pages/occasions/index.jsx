import Car from "@/components/widgets/Car";
import styles from "@/styles/Occasions.module.css";

export default function Cars({ carList }) {
  return (
    <section className={styles.cars}>
      <div className="container">
        <h1>Occasions</h1>
        <div className={styles.carsContainer}>
          {carList.map((carData, i) => (
            <Car key={i} carData={carData} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  try {
    const carsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars`
    );

    const carList = await carsResponse.json();

    return {
      props: {
        carList,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        carList: null,
        error: "Failed to fetch data",
      },
    };
  }
}
