import { useState } from "react";
import Panel from "@/components/widgets/Panel";
import SendIcon from "@mui/icons-material/Send";
import styles from "@/styles/Reviews.module.css";

export default function AddReview() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  async function handleFormSubmit(e) {
    e.preventDefault();

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/review/add`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className={styles.addReview}>
      <div className="container">
        <Panel />
        <h1>Review plaatsen</h1>
        <form onSubmit={handleFormSubmit}>
          <div className="field">
            <label htmlFor="name">Naam: </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="email">E-mailadres: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="field">
            <label htmlFor="message">Bericht: </label>
            <textarea
              name="message"
              id="message"
              maxLength="400"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <button type="submit">
            Verzenden <SendIcon />
          </button>
        </form>
      </div>
    </div>
  );
}
