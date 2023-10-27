import React from "react";

interface ProductCardProps {
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
}) => {
  return (
    <div className="max-w-xs w-full rounded overflow-hidden shadow-lg m-2">
      <img src={image} alt={name} className="w-full" />

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>

      <div className="px-6 py-4">
        <span className="text-gray-700 text-base">
          Price: ${price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;

{
  /* <ProductCard
  name="Product Name"
  description="Product Description"
  price={19.99}
  image="product-image.jpg"
/> */
}
