import Appbar from "@/components/Appbar";
import Login from "ui/components/Login";
// import axios from "axios";

export default function LoginPage() {
  return (
    <div>
      <Appbar />
      <div className="min-h-screen bg-blue-200 flex items-center justify-center ">
        <div className="flex space-x-8 max-w-screen-xl mx-auto p-4">
          <Login />
        </div>
      </div>
    </div>
  );
}
