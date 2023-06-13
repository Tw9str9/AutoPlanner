import Panel from "@/components/widgets/Panel";
import Form from "@/components/dashboard/addForm/Form";
import styles from "@/styles/Dashboard.module.css";

export default function Add() {
  return (
    <div className={styles.addCar}>
      <div className="container">
        <Panel />
        <h1>Auto Tevoegen</h1>
        <Form />
      </div>
    </div>
  );
}
