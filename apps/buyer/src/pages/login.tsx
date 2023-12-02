import Login from "ui/components/Login";
import axios from "axios";

export default function LoginPage() {
  return (
    <div>
      <div className="min-h-screen bg-white flex items-center justify-center ">
        <div className="flex space-x-8 max-w-screen-xl mx-auto p-4">
          <Login
            onSelect={async (email: string, password: string) => {
              let res = await axios.post("/api/auth/register", {
                email,
                password,
              });
              localStorage.setItem("token", res.data.token);
            }}
          />
        </div>
      </div>
    </div>
  );
}
