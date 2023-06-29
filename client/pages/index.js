import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Reviews from "@/components/home/Reviews";
import Gallery from "@/components/home/Gallery";
import Cars from "@/components/home/Cars";

export default function Home({ carList, reviewList }) {
  return (
    <>
      {/* <Hero /> */}
      <Cars carList={carList} />
      <Services />
      <Reviews reviewList={reviewList} />
      <Gallery />
    </>
  );
}

export async function getServerSideProps() {
  try {
    const carsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars`
    );
    const photosResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/cars`
    );
    const reviewsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/review`
    );

    const carList = await carsResponse.json();
    const photoList = await photosResponse.json();
    const reviewList = await reviewsResponse.json();

    return {
      props: {
        carList,
        photoList,
        reviewList,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        carList: null,
        photoList: null,
        reviewList: null,
        error: "Failed to fetch data",
      },
    };
  }
}
