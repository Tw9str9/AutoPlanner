import Form from "./Form";
import { ArrowBack } from "@mui/icons-material";
import styles from "@/styles/Dashboard.module.css";
import { useRouter } from "next/router";

export default function Add() {
  const router = useRouter();
  function handleButtonBack() {
    router.back();
  }
  return (
    <div className={styles.addCar}>
      <div className="container">
        <h1>Auto Tevoegen</h1>
        <button type="button" onClick={handleButtonBack}>
          <ArrowBack />
        </button>
        <Form />
      </div>
    </div>
  );
}
