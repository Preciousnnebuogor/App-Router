"use client";
import style from "./name.module.scss";
export default function Name() {
  return (
    <div className={style.body}>
      <div className={style.text}>
        <h1>What's your name?</h1>
        <p>Enter the name you use in real life</p>
      </div>
      <input type="text" placeholder="firstname" />
      <input type="text" placeholder="middlename" />
      <input type="text" placeholder="surname" />
    </div>
  );
}
