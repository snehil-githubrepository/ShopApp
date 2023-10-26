import { Inter } from "next/font/google";
import Login from "ui/components/Login";
import Register from "ui/components/Register";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Register />
      <Login />
    </main>
  );
}
