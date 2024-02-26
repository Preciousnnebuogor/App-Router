"use client";
import { useRouter } from "next/navigation";
import style from "./name.module.scss";
import { useState } from "react";
export default function Name() {
  const router = useRouter();
  const [data, setData] = useState({
    firstname: "",
    middlename: "",
    surname: "",
  });
  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form hs been submitted");
  };

  return (
    <div className={style.body}>
      <div className={style.text}>
        <h1>What's your name?</h1>
        <p>Enter the name you use in real life</p>
      </div>
      <div className={style.input} onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstname"
          value={data.firstname}
          onChange={handleChange}
          placeholder="First name"
        />
        <input
          type="text"
          name="middlename"
          value={data.middlename}
          onChange={handleChange}
          placeholder="Middle name"
        />
        <input
          type="text"
          name="surname"
          value={data.surname}
          onChange={handleChange}
          placeholder="Surname"
        />
        <br />
        <button
          className={style.button}
          onClick={() => {
            router.push("/date");
          }}
        >
          Next
        </button>
      </div>

      <h3>I already have an account</h3>
    </div>
  );
}
