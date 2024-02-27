"use client";
import style from "./gender.module.scss";
import {useState} from "react"
import { useRouter } from "next/navigation";
export default function Gender() {

    const router = useRouter()

    const [gender,setGender] = useState({});

    const handleChange = (e:any)=>{
        const name = e.target.name;
        const value = e.target.value;
        setGender({...gender, [name]: value})
    }

    const handleSubmit = (e:any) => {
        e.preventDefault()
    }

  return (
    <div className={style.body}>
      <div className={style.text}>
        <h1>What's your gender?</h1>
        <h4>You can change who see your gender on your profile later.</h4>
      </div>

      <div className={style.table} onSubmit={handleSubmit}>
        <div className={style.form}>
          <p>Female</p>
          <input type="radio" name="gender" value="female"
           onChange={handleChange}/>
        </div>

        <div className={style.form}>
          <p>Male</p>
          <input type="radio" name="gender" value="male"
           onChange={handleChange} />
        </div>

        <h3>More options</h3>
        <div className={style.form}>
          <h4 className={style.select}>
            Select "More options" to choose another gender or if you'd rather
            not say.
          </h4>
          <input type="radio" name="gender" value="other"
           onChange={handleChange} />
        </div>

      <button className={style.button} onClick={() => {router.push("/contact")}}>Next</button>
    </div>
    </div>
  );
}
