"use client";
// remember x icon on the contact input
import Link from "next/link";
import style from "./contact.module.scss";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./yupSchema";
import { ImCancelCircle } from "react-icons/im";

export default function Contact() {
  const router = useRouter();
 
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
    <div className={style.body}>
      <div className={style.text}>
        <h1>What's your mobile number?</h1>
        <p>
          Enter the mobile number on which you can be contacted. No one will see
          this on your profile.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <div className={style.icon}>
        <div className={style.form}>
          <input
            type="tel"
            required
            placeholder="Mobile number"
            {...register("contact")}
          />
          <ImCancelCircle />
          </div>
          <p style={{color:"red"}}>{errors.contact?.message}</p>
          <h5>
            You'll also recieve SMS notifications from us and can opt out at any
            time.{" "}
            <Link href={"/"} className={style.Link}>
              Learn more
            </Link>
          </h5>
        </div>

        <button className={style.button}>Next</button>

        <br />

        <button className={style.button2}>Sign up with email address</button>
      </form>
    </div>
  );
}
