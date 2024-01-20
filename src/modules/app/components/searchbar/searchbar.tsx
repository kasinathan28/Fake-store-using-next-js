import React from 'react';
import style from "./searchBar.module.css";

export default function Searchbar() {
  return (
    <div className={style.main}>
      <div className={style.searchBar}>
        <input className={style.input} type="text" placeholder="Search..." />
        <button className={style.button}>Search</button>
      </div>
    </div>
  );
}
