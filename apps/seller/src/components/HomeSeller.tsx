import React from "react";
import { useRouter } from "next/router";

const SellerLanding: React.FC = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/seller/login");
  };

  const handleRegisterClick = () => {
    router.push("/seller/register");
  };

  const manageProductsClick = () => {
    router.push("/seller/products");
  };

  return (
    <div>
      <div className="p-10 grid flex items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="text-center md:text-left text-gray-800">
          <h1 className="text-4xl font-bold text-indigo-800">
            Welcome to Shopical Seller :<br /> Your E-commerce Store
          </h1>
          <p className="text-xl">Manage and sell your products with ease.</p>
          <div className="flex mt-4">
            <div className="mr-4">
              <button
                onClick={handleLoginClick}
                className="bg-indigo-600 text-white py-2 px-6 rounded-full hover:bg-indigo-700 transition duration-300"
              >
                Seller Login
              </button>
            </div>
            <div>
              <button
                onClick={handleRegisterClick}
                className="bg-green-600 mr-4 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
              >
                Seller Register
              </button>
            </div>
            <div>
              <button
                onClick={manageProductsClick}
                className="bg-yellow-400 text-black py-2 px-12 rounded-full hover:bg-yellow-500 transition duration-300"
              >
                Manage Your Products
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <img
            src="/seller-image.jpg" // Replace with a seller-related image
            className="w-full rounded-xl"
            alt="Seller Image"
          />
        </div>
      </div>
    </div>
  );
};

export default SellerLanding;
