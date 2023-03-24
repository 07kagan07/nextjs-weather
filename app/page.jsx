import { Inter } from "next/font/google";
import Wheather from "@/components/wheather/wheather";
import Link from "next/link";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="container">
      <Link className="btn" href={"/havadurumu"}>
        Hava Durumu Sayfasına Git
      </Link>

      <div className={styles.continueWrap}>
        <h3 className={styles.continue}>Devamı Gelecek</h3>
      </div>
    </div>
  );
}
