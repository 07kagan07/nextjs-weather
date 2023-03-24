import { Inter } from "next/font/google";
import Wheather from "@/components/wheather/wheather";

const inter = Inter({ subsets: ["latin"] });

export default function WheatherPage() {
  return (
    <div className="container">
      <h1>Hava Durumu</h1>
      <Wheather />
    </div>
  );
}
