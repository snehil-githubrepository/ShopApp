import React from "react";

interface ProductDetailsProps {
  name: string;
  description: string;
  specifications: string[];
  images: string[];
  reviews: { rating: number; comment: string }[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  description,
  specifications,
  images,
  reviews,
}) => {
  return (
    <div className="product-details">
      <h2>{name}</h2>
      <p>{description}</p>

      <h3>Specifications:</h3>
      <ul>
        {specifications.map((spec, index) => (
          <li key={index}>{spec}</li>
        ))}
      </ul>

      <h3>Images:</h3>
      <div className="product-images">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} />
        ))}
      </div>

      <h3>Customer Reviews:</h3>
      <ul>
        {reviews.map((review, index) => (
          <li key={index}>
            <div>Rating: {review.rating}</div>
            <div>Comment: {review.comment}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;

// import ProductDetails from '../../path/to/ProductDetails'; // Adjust the path as needed

// // ...

// <ProductDetails
//   name="Product Name"
//   description="Product Description"
//   specifications={['Spec 1', 'Spec 2', 'Spec 3']}
//   images={['image1.jpg', 'image2.jpg', 'image3.jpg']}
//   reviews={[
//     { rating: 5, comment: 'Great product!' },
//     { rating: 4, comment: 'Good quality.' },
//   ]}
// />
