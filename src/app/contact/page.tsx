import Link from "next/link";
import style from "./contact.module.scss"

export default function Contact() {
    return <div className={style.body}> 
        <div className={style.text}>
            <h1>What's your mobile number?</h1>
            <p>Enter the mobile number on which you can be contacted. No one will see this on your profile.</p>
        </div>
        <div className={style.form}>
            <input type="number" placeholder="Mobile number"/>
            <h4>you'll also recieve SMS notifications from us and can opt out t any time. <Link href={"/"}>Learn more</Link></h4>
        </div>
        <button>Next</button>
        <button className={style.button2}>Sign up with email address</button>
    </div>
}