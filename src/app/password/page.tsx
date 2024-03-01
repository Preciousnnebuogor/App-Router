"use client";
import { useRouter } from "next/navigation";
import style from "./password.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./yupSchema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
export default function Password() {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(Schema) });
  const onSubmitHandler = (data: any) => {
    console.log({ data });
    router.push("/save");
  };
  return (
    <div className={style.body}>
      <div>
        <h1>Create a password</h1>

        <h6>
          Create a password with at least 6 letters or numbers. It should should
          be something that others can't guess.
        </h6>
      </div>

      <form onSubmit={handleSubmit(onSubmitHandler)}>

        <div className={style.feild}>
          <input
            type={open === false ? "password" : "text"}
            placeholder="Password"
            required
            {...register("password")}
          />

          <div className={style.icon}>
            {open === false ? (
              <AiFillEye onClick={toggle} />
            ) : (
              <AiFillEyeInvisible onClick={toggle} />
            )}
          </div>
        </div>
        <p style={{color:"red"}}>{errors.password?.message}</p>

        <button>N ext</button>

      </form>
    </div>
  );
}
    // Note: install the react-hook-icons 
    // react-icons : select the icon you want and import 