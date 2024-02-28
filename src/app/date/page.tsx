"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import style from "./date.module.scss";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Schema } from "./yupSchema";



export default function DateOfBirth() {
const router = useRouter()

const {
  register,
  handleSubmit,
  formState: { errors },
  reset,
} = useForm({ resolver: yupResolver(Schema) });
const onSubmitHandler = (data: any) => {
  console.log({ data });
  router.push("/gender");
};

  return (
    <div className={style.body} >
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <h1>What's your date of birth?</h1>
        <p>
          Choose your date of birth. You can also make this private later.{" "}
          <Link href={"/name"} className={style.Link}>
            Why do i need to provide my date of birth?
          </Link>
        </p>
        <input
          type="date"
          required
          {...register("date")}
        />
        <p>{errors.date?.message}</p>
        <br />
        <button className={style.button}>Next</button>
      </form>
      </div>
  );
}
