import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ensureDbConnected } from "@/lib/dbConnect";
// import { Product } from "db";

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  // app.com/products/query?="product%20name"
  const { asPath } = router;

  // Extract the encoded product name from asPath
  // "product%20name"
  const productNameEncoded = asPath.split("?=")[1];
  // "product name"
  const decodedProductName = productNameEncoded
    ? decodeURIComponent(productNameEncoded)
    : "";

  const [productDetails, setProductDetails] = useState<any>(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      // Your logic to fetch product details using `decodedProductName`
      if (decodedProductName) {
        // Fetch product details...
        try {
          // Connect to MongoDB
          const { db } = await ensureDbConnected();

          // Fetch product details based on the decoded product name
          const product = await Product.findOne({
            name: decodedProductName,
          }).exec();

          if (product) {
            setProductDetails(product); // Set the fetched product details
          } else {
            console.log("Product not found");
          }
        } catch (error) {
          console.error("Error fetching product details:", error);
        }
      }
    };
    fetchProductDetails();
  }, [decodedProductName]);

  return (
    // Your JSX here...
    <div>
      <h1>{decodedProductName}</h1>
      {productDetails && (
        <div>
          <p>Description: {productDetails.description}</p>
          <p>Price: {productDetails.price}</p>
          {/* Render other product details */}
        </div>
      )}
    </div>
  );
};

export default ProductDetailPage;
