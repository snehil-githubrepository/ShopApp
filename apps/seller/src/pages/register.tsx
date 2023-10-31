import Register from "ui/components/Register";
// import axios from "axios";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex space-x-8 max-w-screen-xl mx-auto p-4">
        <Register />
      </div>
    </div>
  );
}
