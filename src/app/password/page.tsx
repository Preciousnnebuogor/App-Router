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

  const [open, setOpen] = useState<boolean>(false);
  const toggleopen = () => {
    setOpen((prevState) => !prevState);
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
            type={open ? "text" : "password"}
            placeholder="Password"
            required
            {...register("password")}
          />

          <div className={style.icon}>
            {open ? (
              <AiFillEye onClick={toggleopen} />
            ) : (
              <AiFillEyeInvisible onClick={toggleopen} />
            )}
          </div>
        </div>
        <p>{errors.password?.message}</p>
        <button>N ext</button>
      </form>
    </div>
  );
}
// note to install react-hook-form