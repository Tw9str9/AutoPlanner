import { useEffect, useRef, useState } from "react";
import {
  ArrowCircleRight,
  ArrowCircleLeft,
  Collections,
} from "@mui/icons-material";
import styles from "@/styles/Slider.module.css";

export default function Slider({ children, currentImg, totalImgs }) {
  const [currentCount, setCurrentCount] = useState(0);

  const sliderRef = useRef();

  function handlePrevClick() {
    sliderRef.current.scrollBy({
      left: -sliderRef.current.offsetWidth,
      behavior: "smooth",
      scrollTimingFunction: "ease-in-out",
    });
    if (currentCount > 1) {
      setCurrentCount((prev) => prev - 1);
    }
  }

  function handleNextClick() {
    sliderRef.current.scrollBy({
      left: sliderRef.current.offsetWidth,
      behavior: "smooth",
      scrollTimingFunction: "ease-in-out",
    });
    if (currentCount < totalImgs) {
      setCurrentCount((prev) => prev + 1);
    }
  }

  useEffect(() => {
    if (currentImg !== null) {
      const scrollPosition =
        sliderRef.current.offsetWidth * currentImg -
        sliderRef.current.offsetWidth;
      sliderRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentCount(currentImg);
    }
  }, [currentImg]);

  return (
    <div className={styles.slider} ref={sliderRef}>
      {children}
      <button onClick={handlePrevClick}>
        <ArrowCircleLeft />
      </button>
      <button onClick={handleNextClick}>
        <ArrowCircleRight />
      </button>
      {totalImgs && (
        <div className={styles.imgCount}>
          <Collections /> {currentCount} / {totalImgs}
        </div>
      )}
    </div>
  );
}
