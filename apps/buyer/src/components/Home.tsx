import { useRouter } from "next/router";
import { useRef } from "react";
import { useEffect, useState } from "react";
import NewCollectionItem from "ui/components/NewCollectionItem";
import Footer from "./Footer";

const ScrollDownButton: React.FC = () => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  interface InformationBlockProps {
    title: string;
    description: string;
    iconHref: string; // URL or href for the icon
  }

  const dollar1 = "/icons/dollar.svg";
  const shipping2 = "/icons/shipping.svg";

  return (
    <div
      className="flex justify-center mt-6 cursor-pointer"
      onClick={handleScroll}
    >
      {/* Replace with your arrow or scroll-down icon */}
      <p className="text-gray-600 text-lg font-bold">Unveil what's beneath</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 animate-bounce"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 3a.75.75 0 0 1 .53.22l4.25 4.25a.75.75 0 0 1-1.06 1.06L10 5.81 6.28 9.53a.75.75 0 1 1-1.06-1.06l4.25-4.25A.75.75 0 0 1 10 3z"
        />
        <path
          fillRule="evenodd"
          d="M10 3a.75.75 0 0 1 .53.22l4.25 4.25a.75.75 0 0 1-1.06 1.06L10 5.81 6.28 9.53a.75.75 0 1 1-1.06-1.06l4.25-4.25A.75.75 0 0 1 10 3z"
        />
        <path
          fillRule="evenodd"
          d="M10 13a.75.75 0 0 1 .53.22l4.25 4.25a.75.75 0 0 1-1.06 1.06L10 15.81l-3.72 3.72a.75.75 0 1 1-1.06-1.06l4.25-4.25A.75.75 0 0 1 10 13z"
        />
      </svg>
    </div>
  );
};

interface InformationBlockProps {
  title: string;
  description: string;
  iconHref: string; // URL or href for the icon
}

const InformationBlock: React.FC<InformationBlockProps> = ({
  title,
  description,
  iconHref,
}) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img src={iconHref} alt="Icon" className="h-8 w-8 mb-2" />
      <div className="text-lg font-semibold mb-1">{title}</div>
      <div className="text-sm text-center">{description}</div>
    </div>
  );
};

const Landing: React.FC = () => {
  const router = useRouter();

  const dollar1 = "/icons/dollar.svg";
  const shipping2 = "/icons/shipping.svg";

  const [remainingTime, setRemainingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const checkoutProductsClick = () => {
    router.push("/products");
  };

  const calculateRemainingTime = () => {
    // Set your deal end date here
    const dealEndDate = new Date("2023-12-15T00:00:00Z");
    const now = new Date().getTime();
    const distance = dealEndDate.getTime() - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setRemainingTime({ days, hours, minutes, seconds });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      calculateRemainingTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
      <ScrollDownButton />
      <div className="flex justify-center items-center">
        <img
          src="/hero-1.png" // Replace with your large image path
          alt="Large Ecommerce Image"
          className="w-full bg-gray-300 md:w-4/5 lg:w-full  mt-10 rounded-lg shadow-lg"
        />
      </div>

      {/**
       * New Collection Section
       */}
      <div className="mt-10 p-4">
        <h2 className="text-3xl font-bold mb-4 text-center">New Collection</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8">
          {/* Replace this with your actual data */}
          <NewCollectionItem
            name="Ladies Collection"
            price={100}
            image="/women-fashion.jpg"
          />
          <NewCollectionItem
            name="Shoes Nike 300 black"
            price={150}
            image="/shoes.jpg"
          />
          <NewCollectionItem
            name="Mr. Servoys Toy Shop Mystery"
            price={80}
            image="/toys.jpg"
          />
          <NewCollectionItem
            name="Sofa set - Cyan with leather"
            price={180}
            image="/furniture.jpg"
          />
        </div>
      </div>

      {/**
       * Deal of the Month Section
       */}
      <div className="mt-10 p-4 flex justify-center">
        <div className="max-w-screen-lg w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Deal of the Month
          </h2>
          <div className="grid grid-cols-1 m-8 md:grid-cols-2 lg:grid-cols-12 ">
            <div className=" lg:col-span-5 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Deals of the Month</h3>
              <p className="text-lg mb-6">
                Get ready for a shopping experience like never before with our
                Deals of the Month! Every purchase comes with exclusive perks
                and offers, making this month a celebration of savvy choices and
                amazing deals. Don't miss out! 🎁🛒
              </p>
              <div className="flex flex-wrap justify-between">
                <div className="text-center">
                  <p className="text-4xl font-semibold">{remainingTime.days}</p>
                  <p className="text-lg">Days</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-semibold">
                    {remainingTime.hours}
                  </p>
                  <p className="text-lg">Hours</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-semibold">
                    {remainingTime.minutes}
                  </p>
                  <p className="text-lg">Mins</p>
                </div>
                <div className="text-center">
                  <p className="text-4xl font-semibold">
                    {remainingTime.seconds}
                  </p>
                  <p className="text-lg">Sec</p>
                </div>
              </div>
              <button
                onClick={checkoutProductsClick}
                className="bg-gray-900 w-44 text-white py-3 px-1 rounded-md hover:bg-gray-500 transition duration-300 mt-4"
              >
                View Products →
              </button>
            </div>
            <div className="row-span-2 lg:col-span-7 ml-14 ">
              <img
                src="/image-4.svg" // Replace with your image path
                alt="Deal of the Month"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
      {/**
       * Information Blocks Section
       */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 m-20">
        <div className="col-span-1 flex justify-center items-center flex-col">
          <InformationBlock
            title="Free Shipping"
            description="Free shipping for orders above $150"
            iconHref={shipping2}
          />
        </div>
        <div className="col-span-1 flex justify-center items-center flex-col">
          <InformationBlock
            title="Money Guarantee"
            description="Within 30 days for an exchange"
            iconHref={dollar1}
          />
        </div>
        <div className="col-span-1 flex justify-center items-center flex-col">
          <InformationBlock
            title="Online Support"
            description="24 hours a day, 7 days a week"
            iconHref={shipping2}
          />
        </div>
        <div className="col-span-1 flex justify-center items-center flex-col">
          <InformationBlock
            title="Flexible Payment"
            description="Pay with multiple credit cards"
            iconHref={dollar1}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;

// <div className="bg-gray-100 min-h-screen flex items-center justify-center">
//       <div className="max-w-3xl mx-auto p-6">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
