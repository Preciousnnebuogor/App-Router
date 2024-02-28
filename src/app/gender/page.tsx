"use client";
import { useForm } from "react-hook-form";
import style from "./gender.module.scss";
import { useRouter } from "next/navigation";
import { Schema } from "./yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
export default function Gender() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(Schema) });
  const onSubmitHandler = (data: any) => {
    console.log({ data });
    router.push("/password");
  };

  return (
    <div className={style.body}>
      <div className={style.text}>
        <h1>What's your gender?</h1>
        <h4>You can change who see your gender on your profile later.</h4>
      </div>

      <form className={style.table} onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={style.form}>
          <p>Female</p>
          <input type="radio" required {...register("gender")} />
        </div>

        <div className={style.form}>
          <p>Male</p>
          <input type="radio" required {...register("gender")} />
        </div>

        <h3>More options</h3>
        <div className={style.form}>
          <h4 className={style.select}>
            Select "More options" to choose another gender or if you'd rather
            not say.
          </h4>
          <input type="radio" required {...register("gender")} />
        </div>

        <button className={style.button}>Next</button>
      </form>
    </div>
  );
}
