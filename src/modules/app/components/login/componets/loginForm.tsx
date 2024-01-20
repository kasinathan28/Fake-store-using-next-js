// LoginForm.tsx
import React, { useState } from "react";
import styles from "./loginForm.module.css";

export default function LoginForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), 
      });
      console.log(response);
      
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className={styles.loginForm}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <label className={styles.label}>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className={styles.input}
          required
        />

        <button type="submit" className={styles.button}>
          Log In
        </button>
      </form>
    </div>
  );
}
