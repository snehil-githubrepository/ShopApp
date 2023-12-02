import react from "react";

const UpperBar: React.FC = () => {
  return (
    <nav className="bg-white flex lg:flex-row justify-around h-66">
      {/* card  */}
      <div className="bg-gray-100 rounded-b-full shadow p-4 hover:shadow-lg w-full md:w-1/2 lg:w-1/5">
        <a href="/electronics">
          <img
            src="electronics.jpg"
            alt="electronics"
            className="w-full h-24 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-blue-600">Electronics</h2>
          </div>
        </a>
      </div>

      <div className="bg-gray-100 rounded-b-full shadow p-4 hover:shadow-lg w-full md:w-1/2 lg:w-1/5">
        <a href="/products/toys">
          <img
            src="toys.jpg"
            alt="toys"
            className="w-full h-24 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-blue-600">Toys</h2>
          </div>
        </a>
      </div>

      <div className="bg-gray-100 rounded-b-full shadow p-4 hover:shadow-lg w-full md:w-1/2 lg:w-1/5">
        <a href="/products/clothes">
          <img
            src="clothes.jpg"
            alt="clothes"
            className="w-full h-24 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-blue-600">Clothes</h2>
          </div>
        </a>
      </div>

      <div className="bg-gray-100 rounded-b-full shadow p-4 hover:shadow-lg w-1/2 md:w-1/2 lg:w-1/5">
        <a href="/products/shoes">
          <img
            src="shoes.jpg"
            alt="shoes"
            className="w-full h-24 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-blue-600">Shoes</h2>
          </div>
        </a>
      </div>

      <div className="hidden lg:block bg-gray-100 rounded-b-full shadow p-4 hover:shadow-lg w-full md:w-1/2 lg:w-1/5">
        <a href="/products/fashion-accessories">
          <img
            src="accessories.jpg"
            alt="accessories"
            className="w-full h-24 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-blue-600">
              Fashion Accessories
            </h2>
          </div>
        </a>
      </div>

      <div className="hidden lg:block bg-gray-100 rounded-b-full shadow p-4 hover:shadow-lg w-full md:w-1/2 lg:w-1/5">
        <a href="/furniture">
          <img
            src="furniture.jpg"
            alt="furniture"
            className="w-full h-24 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-blue-600">Furniture</h2>
          </div>
        </a>
      </div>

      <div className="hidden lg:block bg-gray-100 rounded-b-full shadow p-4 hover:shadow-lg w-full md:w-1/2 lg:w-1/5">
        <a href="/home-decor">
          <img
            src="home-decor.jpg"
            alt="home-decor"
            className="w-full h-24 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-blue-600">Home Decor</h2>
          </div>
        </a>
      </div>

      <div className="hidden lg:block bg-gray-100 rounded-b-full shadow p-4 hover:shadow-lg w-full md:w-1/2 lg:w-1/5">
        <a href="/grocery">
          <img
            src="grocery.jpg"
            alt="grocery"
            className="w-full h-24 object-cover rounded-t-lg"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold text-blue-600">Grocery</h2>
          </div>
        </a>
      </div>
    </nav>
  );
};

export default UpperBar;
