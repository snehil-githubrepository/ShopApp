import Appbar from "@/components/Appbar";
import React from "react";

const Products: React.FC = () => {
  return (
    <div>
      <Appbar />
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Explore Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* This is start of this card*/}
            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg">
              <a href="/electronics">
                <img
                  src="/electronics.jpg"
                  alt="Electronics"
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-600">
                    Electronics
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Explore the latest electronic gadgets.
                  </p>
                </div>
              </a>
            </div>
            {/* End of Card */}

            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg">
              <a href="/products/toys">
                <img
                  src="/toys.jpg"
                  alt="toys"
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-600">Toys</h2>
                  <p className="text-gray-600 mt-2">
                    Find the perfect toys for your kids.
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg">
              <a href="/products/clothes">
                <img
                  src="/clothes.jpg"
                  alt="clothes"
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-600">
                    Clothes
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Stay stylish with our clothing collection.
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg">
              <a href="/products/shoes">
                <img
                  src="/shoes.jpg"
                  alt="shoes"
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-600">Shoes</h2>
                  <p className="text-gray-600 mt-2">
                    Step out in style with our shoe collection.
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg">
              <a href="/products/fashion-accessories">
                <img
                  src="/accessories.jpg"
                  alt="accessories"
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-600">
                    Fashion Accessories
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Enhance your style with accessories.
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg">
              <a href="/products/mens-fashion">
                <img
                  src="/mens-fashion.jpg"
                  alt="fashion(m)"
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-600">
                    Men's Fashion
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Discover a wide range of Men's clothing.
                  </p>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow p-4 hover:shadow-lg">
              <a href="/products/women-fashion">
                <img
                  src="/women-fashion.jpg"
                  alt="fashion(f)"
                  className="w-full h-36 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-blue-600">
                    Women's Fashion
                  </h2>
                  <p className="text-gray-600 mt-2">
                    Find the perfect Women's Fashion.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
