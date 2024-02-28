"use client";
import { useRouter } from "next/navigation";
import style from "./name.module.scss";
import { Schema } from "./yupSchema";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
export default function Name() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(Schema) });
  const onSubmitHandler = (data: any) => {
    console.log({ data });
    router.push("/date");
  };

  return (
    <div className={style.body}>
      <div className={style.text}>
        <h1>What's your name?</h1>
        <p>Enter the name you use in real life</p>
      </div>
      <form className={style.input} onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          type="text"
          required
          placeholder="First name"
          {...register("firstname")}
        />
        <p>{errors.firstname?.message}</p>
        <input
          type="text"
          required
          {...register("middlename")}
          placeholder="Middle name"
        />
        <p>{errors.middlename?.message}</p>
        <input
          type="text"
          required
          placeholder="Surname"
          {...register("surname")}
        />
        <p>{errors.surname?.message}</p>
        <br />
        <button className={style.button} type="submit">
          Next
        </button>
      </form>
    </div>
  );
}
