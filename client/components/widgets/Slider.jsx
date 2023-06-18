import { useRef } from "react";
import { ArrowCircleRight, ArrowCircleLeft } from "@mui/icons-material";
import styles from "@/styles/Slider.module.css";

export default function Slider({ children }) {
  const sliderRef = useRef();

  function handlePrevClick() {
    sliderRef.current.scrollBy({
      left: -sliderRef.current.offsetWidth,
      behavior: "smooth",
      scrollTimingFunction: "ease-in-out",
    });
    console.log(-sliderRef.current.offsetWidth);
  }
  function handleNextClick() {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
      scrollTimingFunction: "ease-in-out",
    });
    console.log(sliderRef.current.offsetWidth);
  }
  return (
    <div className={styles.slider} ref={sliderRef}>
      {children}
      <button onClick={handlePrevClick}>
        <ArrowCircleLeft />
      </button>
      <button onClick={handleNextClick}>
        <ArrowCircleRight />
      </button>
    </div>
  );
}
