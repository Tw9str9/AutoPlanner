import CarDetails from "@/components/occasions/CarDetails";

export default function CarDetailsPage({ car }) {
  return <CarDetails car={car} />;
}

export const getServerSideProps = async (context) => {
  const { slug } = context.params;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars/car/${slug}`
    );
    if (!res.ok) {
      throw new Error("Failed to fetch car details");
    }
    const car = await res.json();
    return { props: { car } };
  } catch (error) {
    return { props: { car: [], error: "Failed to fetch car details." } };
  }
};
