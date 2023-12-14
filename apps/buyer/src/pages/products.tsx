import Footer from "@/components/Footer";
import UpperBar from "@/components/Upperbar";
import React from "react";
import ProductCard from "ui/components/ProductCard";

const Products: React.FC = () => {
  return (
    <div>
      <UpperBar />
      <div className="flex flex-wrap justify-center mt-10">
        <div className="w-1/2 lg:w-1/4 px-4 lg:aspect-square  mb-4">
          <ProductCard
            name="shoes Nike"
            description="Product Description"
            price={2400}
            image="/shoes-nike.jpg"
          />
        </div>
        {/* */}
        {/* <div className="w-66 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="p-8 rounded-t-lg"
              src="/docs/images/products/apple-watch.png"
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#">
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
              </h5>
            </a>
            <div className="flex items-center mt-2.5 mb-5">
              <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-yellow-300"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
                <svg
                  className="w-4 h-4 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
                5.0
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                $599
              </span>
              <a
                href="#"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add to cart
              </a>
            </div>
          </div> */}
        {/* </div> */}

        <div className="w-1/2 lg:w-1/4 lg:aspect-square px-4 mb-4">
          <ProductCard
            name="Macbook Air 2023"
            description="Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver"
            price={150000}
            image="macbook.png"
          />
        </div>
        <div className="w-1/2 lg:w-1/4 lg:aspect-square  px-4 mb-4">
          <ProductCard
            name="asus Vivobook 15"
            description="ASUS Vivobook 15 OLED (2023), AMD Ryzen 5 7530U, 15.6' (39.62 cm) FHD OLED, Thin and Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/Backlit KB/FP Sensor/Black/1.7 Kg), M1505YA-LK541WS"
            price={90000}
            image="asus-vivobook.png"
          />
        </div>
        <div className="w-1/2 lg:w-1/4 px-4 mb-4 lg:aspect-square ">
          <ProductCard
            name="Leotude Print"
            description="Pack of 3 Men Printed Round Neck Cotton Blend Multicolor T-Shirt"
            price={1200}
            image="leotude-cloth.png"
          />
        </div>
        <div className="w-1/2 lg:w-1/4 px-4 mb-4 lg:aspect-square ">
          <ProductCard
            name="APPLE iPhone 15 (white, 128 GB)"
            description="Experience the iPhone 15 , your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. "
            price={135000}
            image="iphone-15.png"
          />
        </div>
        <div className="w-1/2 lg:w-1/4 px-4 mb-4 lg:aspect-square">
          <ProductCard
            name="Sofa (Gray)"
            description="Product Description"
            price={60000}
            image="sofa.jpg"
          />
        </div>
        <div className="w-1/2 lg:w-1/4 px-4 mb-4 lg:aspect-square">
          <ProductCard
            name="Head & Shoulders Smooth and Silky, Anti Dandruff Shampoo for Women & Men , 1 L"
            description="Richly indulgent anti-dandruff shampoo for dry, damaged or frizzy hair, Leaves hair up to 100%"
            price={564}
            image="shampoo.png"
          />
        </div>
        <div className="w-1/2 lg:w-1/4 px-4 mb-4 lg:aspect-square">
          <ProductCard
            name="Home Decor Lucky Deer Family Statue Piano Finish Ceramic Figures - (Set of 4, Multicolor)"
            description="1. Set of Lovely Deer Family - Hot Firing Ceramic statue for Home Decor
          2. The beautiful sculpture is constructed of high-quality ceramic .
          3. These lovely ceramic sculptures are rich in color and have a smooth surface, giving them a lifelike appearance."
            price={900}
            image="Home-Decor-lucky-deer.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
