"use client";
import { useRouter } from "next/navigation";
import style from "./password.module.scss";
import { useState } from "react";
export default function Password() {

  const router = useRouter();

  const [password, setPassword] = useState({
    password: "",
  });

  const handleChange = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setPassword({ ...password, [name]: value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault()
  }
  return (
    <div className={style.body}>
      <div>
        <h1>Create a password</h1>
        <h6>
          Create a password with at least 6 letters or numbers. It should should
          be something that others can't guess.
        </h6>
      </div>
      <div className={style.input} onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password.password}
          onChange={handleChange}
        />
        <button onClick={() =>{router.push("/save")}}>Next</button>
      </div>
    </div>
  );
}
