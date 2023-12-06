import Register from "ui/components/Register";
import axios from "axios";

export default function RegisterPage() {
  return (
    <div>
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex space-x-8 max-w-screen-xl mx-auto p-4">
          <Register
            onClick={async (username, password) => {
              let res = await axios.post("/api/auth/register", {
                username,
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
