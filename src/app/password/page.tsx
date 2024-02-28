"use client";
import { useRouter } from "next/navigation";
import style from "./password.module.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./yupSchema";
import { useForm } from "react-hook-form";
export default function Password() {
  const router = useRouter();

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
      <form className={style.input} onSubmit={handleSubmit(onSubmitHandler)}>
        <input
          type="password"
          placeholder="Password"
          required
          {...register("password")}
        />
        <p>{errors.password?.message}</p>
        <button>Next</button>
      </form>
    </div>
  );
}
