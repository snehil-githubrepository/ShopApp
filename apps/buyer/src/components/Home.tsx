import { useRouter } from "next/router";

const Landing: React.FC = () => {
  const router = useRouter();

  const checkoutProductsClick = () => {
    router.push("/products");
  };

  return (
    <div>
      <div className="p-10 grid flex items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        <div className="text-center md:text-left items-center">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome to Shopical : Future Of Ecommerce
            </h1>
            <p className="text-xl">
              Explore a wide range of products and discover the best deals.
            </p>
          </div>
          <div className="mt-4 text-center items-center lg:flex md:flex">
            <button
              onClick={checkoutProductsClick}
              className="bg-blue-600 text-white py-4 px-8 items-center rounded-lg hover:bg-blue-800 transition duration-300"
            >
              Shop Now
            </button>
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
