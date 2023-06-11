import Panel from "@/components/widgets/Panel";
import Car from "@/components/widgets/Car";
import styles from "@/styles/Occasions.module.css";

export default function Cars({ carList }) {
  return (
    <section className={styles.cars}>
      <div className="container">
        <Panel filter />
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

export const getServerSideProps = async ({ query }) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars`);
    const carList = await res.json();

    if (query.sort && query.direction) {
      const sortedcarList = carList.sort((a, b) => {
        if (query.direction === "asc") {
          return a[query.sort] - b[query.sort];
        } else {
          return b[query.sort] - a[query.sort];
        }
      });

      return { props: { carList: sortedcarList } };
    } else {
      return { props: { carList } };
    }
  } catch (error) {
    return { props: { carList: [] } };
  }
};
