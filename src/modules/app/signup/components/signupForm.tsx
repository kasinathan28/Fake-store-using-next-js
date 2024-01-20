// SignupForm.js
import React, { useState } from 'react';
import styles from './signupForm.module.css';

export default function SignupForm() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
  
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch('https://fakestoreapi.com/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          username: formData.username,
          password: formData.password,
         
        
        }),
      });

      const json = await response.json();
      console.log(json);
      console.log(response);
      
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className={styles.signupForm}>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label className={styles.label}>Email:</label>
        <input className={styles.input} type="email" name="email" value={formData.email} onChange={handleChange} required />

        <label className={styles.label}>Username:</label>
        <input className={styles.input} type="text" name="username" value={formData.username} onChange={handleChange} required />

        <label className={styles.label}>Password:</label>
        <input className={styles.input} type="password" name="password" value={formData.password} onChange={handleChange} required />
        <button className={styles.button} type="submit">Sign Up</button>
      </form>
    </div>
  );
}
