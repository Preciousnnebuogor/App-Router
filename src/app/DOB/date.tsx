"use client";
import style from "./date.module.scss";
import Link from "next/link";
import { useState } from "react";
export default function DateOfBirth() {
  const [data, setData] = useState({ date: "" });
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault()
    console.log("Form hs been submitted")
}

  return (
    <div className={style.body} >
      <form onSubmit={handleSubmit}>
        <h1>What's your date of birth?</h1>
        <p>
          Choose your date of birth. You can also make this private later.{" "}
          <Link href={"/name"} className={style.Link}>
            Why do i need to provide my date of birth?
          </Link>
        </p>
        <input
          type="date"
          name="date"
          value={data.date}
          onChange={handleChange}
        />
        <br />
        <button className={style.button}>Next</button>
      </form>
      </div>
  );
}
