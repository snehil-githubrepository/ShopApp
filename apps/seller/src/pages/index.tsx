import { Inter } from "next/font/google";
import HomeComponent from "@/components/HomeSeller";
import Appbar from "@/components/Appbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Appbar />
      <HomeComponent />
    </div>
  );
}
