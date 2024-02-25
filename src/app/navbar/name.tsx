"use client";
import {useRouter} from "next/navigation"
import style from "./name.module.scss";
export default function Name() {
    
    const router = useRouter()

  return (
    <div className={style.body}>
      <div className={style.text}>
        <h1>What's your name?</h1>
        <p>Enter the name you use in real life</p>
      </div>
      <div className={style.input}>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Middle name" />
        <input type="text" placeholder="Surname" />
        <br />
        <button className={style.button} onClick={()=> {router.push("/page")}}>Next</button>
      </div>

      <h3>I already have an account</h3>
    </div>
  );
}
