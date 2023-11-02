import { useRouter } from "next/router";

const Landing: React.FC = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  const checkoutProductsClick = () => {
    router.push("/products");
  };

  return (
    <div>
      <div className="p-10 grid flex items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold">
            Welcome to Shopical : Future Of Ecommerce
          </h1>
          <p className="text-xl">
            Explore a wide range of products and discover the best deals.
          </p>
          <div className="flex mt-4">
            <div className="mr-4">
              <button
                onClick={handleLoginClick}
                className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
            </div>
            <div>
              <button
                onClick={handleRegisterClick}
                className="bg-green-600 mr-4 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
              >
                Register
              </button>
            </div>
            <div>
              <button
                onClick={checkoutProductsClick}
                className="bg-yellow-400 text-black py-2 px-12 rounded-full hover:bg-yellow-500 transition duration-300"
              >
                Checkout Products First
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <img
            src="/shopping.gif"
            className="w-full rounded-xl"
            alt="Class Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;

// <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="max-w-3xl mx-auto p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
