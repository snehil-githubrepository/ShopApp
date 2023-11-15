import HomeComponent from "@/components/Home";
import AppBar from "@/components/Appbar";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const session = useSession();

  return (
    <div>
      <AppBar />
      <HomeComponent />
    </div>
  );
}
