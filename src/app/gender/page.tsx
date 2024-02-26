"use client";
import style from "./gender.module.scss";
export default function Gender() {
  return (
    <div className={style.body}>
      <div className={style.text}>
        <h1>What's your gender?</h1>
        <h4>You can change who see your gender on your profile later.</h4>
      </div>
      <div className={style.table}>
        <div className={style.form}>
          <p>Female</p>
          <input type="radio" />
        </div>
        <div className={style.form}>
          <p>Male</p>
          <input type="radio" />
        </div>
        <h3>More options</h3>
        <div className={style.form}>
          <h4 className={style.select}>
            Select "More options" to choose another gender or if you'd rather
            not say.
          </h4>
          <input type="radio" />
        </div>
      </div>

      <button className={style.button}>Next</button>
    </div>
  );
}
