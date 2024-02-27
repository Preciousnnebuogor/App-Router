import Link from "next/link";
import style from "./save.module.scss";

export default function Save() {
    return <div className={style.body}>
        <div>
            <h1>Save your login info?</h1>
            <p>We'll save the login info for name displayed, so you won't need to enter it next time you log in.</p>
        </div>
        <div className={style.buttona}>
            <button className={style. button1}>Save</button>
            <br/>
            <button className={style.button2}><Link href="/">Not now</Link></button>
        </div>
    </div>
}