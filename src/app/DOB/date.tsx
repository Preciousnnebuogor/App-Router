"use Client";
import { useRouter } from "next/navigation";
import style from "./date.module.scss";
import Link from "next/link";
export default function DateOfBirth() {
  return (
    <div className={style.home}>
      <div>
        <h1>What's your date of birth?</h1>
        <p>
          Choose your date of birth. You can also make this private later.{" "}
          <Link href={"/name"}>Why do i need to provide my date of birth?</Link>
        </p>
      </div>
      <div>
        <input type="date" />
      </div>
    </div>
  );
}
