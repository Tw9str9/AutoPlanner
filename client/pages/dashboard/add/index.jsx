import Form from "@/pages/dashboard/add/Form";
import { ArrowBack } from "@mui/icons-material";
import { useRouter } from "next/router";
import styles from "@/styles/Dashboard.module.css";

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
