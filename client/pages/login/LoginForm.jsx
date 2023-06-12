import { useState } from "react";
import { useRouter } from "next/router";
import styles from "@/styles/Login.module.css";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();

    const formData = {
      email: email,
      password: password,
    };

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          router.push("/dashboard");
        } else {
          throw new Error("Login failed.");
        }
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  }
  return (
    <section className={styles.login}>
      <div className="container">
        <h1>Dashboard</h1>
        <div className={styles.form}>
          <p>Inloggen</p>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password">Wachtwoord</label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <a href="#">Wachtwoord vergeten?</a>
              </div>
            </div>
            <button type="submit">Inloggen</button>
          </form>
        </div>
      </div>
    </section>
  );
}
