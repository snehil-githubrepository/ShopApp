import Appbar from "@/components/Appbar";
import UpperBar from "@/components/Upperbar";
import React from "react";
import ProductCard from "ui/components/ProductCard";
import ProductFilters from "ui/components/ProductFilter";
import { useState } from "react";

// interface Product {
//   id: number;
//   name: string;
//   price: number;
//   rating: number;
// }

const Products: React.FC = () => {
  // const yourProducts: Product[] = [
  //   // Replace with your actual product data
  //   // Example:
  //   { id: 1, name: 'Product 1', price: 10, rating: 4.5 },
  //   { id: 2, name: 'Product 2', price: 20, rating: 4.0 },
  //   // Add more products here
  // ];

  // const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // const handleFilter = (filters: ProductFilters) => {
  //   // Example: Filtering based on price range and sorting
  //   const filteredProducts = yourProducts.filter((product) => {
  //     const isWithinPriceRange =
  //       product.price >= filters.minPrice && product.price <= filters.maxPrice;

  //     return isWithinPriceRange;
  //   });

  //   // If you want to sort the filtered products, you can do that here
  //   if (filters.sortBy === 'price') {
  //     filteredProducts.sort((a, b) => a.price - b.price);
  //   } else if (filters.sortBy === 'name') {
  //     filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  //   } else if (filters.sortBy === 'rating') {
  //     filteredProducts.sort((a, b) => b.rating - a.rating);
  //   }

  //   // Now you can update your state or component with the filtered and sorted products
  //   setFilteredProducts(filteredProducts);
  // };

  //   // If you want to sort the filtered products, you can do that here
  //   if (filters.sortBy === "price") {
  //     filteredProducts.sort((a, b) => a.price - b.price);
  //   } else if (filters.sortBy === "name") {
  //     filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  //   } else if (filters.sortBy === "rating") {
  //     filteredProducts.sort((a, b) => b.rating - a.rating);
  //   }

  //   // Now you can update your state or component with the filtered and sorted products
  //   setFilteredProducts(filteredProducts); // Assuming you have a state for filtered products
  // };

  return (
    <div>
      <Appbar />
      <UpperBar />
      <div className="flex relative row ml-12 mt-10">
        <ProductCard
          name="shoes Nike"
          description="Product Description"
          price={2400}
          image="/shoes-nike.jpg"
        />
        <ProductCard
          name="Macbook Air 2023"
          description="Apple 2023 MacBook Air Laptop with M2 chip: 15.3-inch Liquid Retina Display, 8GB Unified Memory, 256GB SSD Storage, 1080p FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver"
          price={150000}
          image="macbook.png"
        />
        <ProductCard
          name="asus Vivobook 15"
          description="ASUS Vivobook 15 OLED (2023), AMD Ryzen 5 7530U, 15.6' (39.62 cm) FHD OLED, Thin and Light Laptop (16GB/512GB SSD/Windows 11/Office 2021/Backlit KB/FP Sensor/Black/1.7 Kg), M1505YA-LK541WS"
          price={90000}
          image="asus-vivobook.png"
        />
        <ProductCard
          name="Leotude Print"
          description="Pack of 3 Men Printed Round Neck Cotton Blend Multicolor T-Shirt"
          price={1200}
          image="leotude-cloth.png"
        />
      </div>
      <div className="flex relative row ml-12 m-2">
        <ProductCard
          name="APPLE iPhone 15 (white, 128 GB)"
          description="Experience the iPhone 15 , your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you're busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. "
          price={135000}
          image="iphone-15.png"
        />
        <ProductCard
          name="Sofa (Gray)"
          description="Product Description"
          price={60000}
          image="sofa.jpg"
        />
        <ProductCard
          name="Head & Shoulders Smooth and Silky, Anti Dandruff Shampoo for Women & Men , 1 L"
          description="Richly indulgent anti-dandruff shampoo for dry, damaged or frizzy hair, Leaves hair up to 100%"
          price={564}
          image="shampoo.png"
        />
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
    // <ProductFilters
    // minPrice={13} // Replace with your actual min price value
    // maxPrice={50}
    // sortBy={"price"}
    // onFilter={(filters) => handleFilter(filters)} />
  );
};

export default Products;
