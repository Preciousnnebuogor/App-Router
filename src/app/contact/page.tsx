import Link from "next/link";
import style from "./contact.module.scss";

export default function Contact() {
  return (
    <div className={style.body}>
      <div className={style.text}>
        <h1>What's your mobile number?</h1>
        <p>
          Enter the mobile number on which you can be contacted. No one will see
          this on your profile.
        </p>
      </div>
      <div className={style.form}>
        <input type="number" placeholder="Mobile number" />
        <h5>
          You'll also recieve SMS notifications from us and can opt out at any
          time. <Link href={"/"} className={style.Link}>Learn more</Link>
        </h5>
      </div>
      <button className={style.button}>Next</button>
      <br/>
      <button className={style.button2}>Sign up with email address</button>
    </div>
  );
}
