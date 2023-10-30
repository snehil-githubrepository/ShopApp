// ui/tailwind.config.js

// Import the Tailwind configurations from the client and admin applications
import buyerConfig from "../../apps/buyer/tailwind.config";
import sellerConfig from "../../apps/seller/tailwind.config";

// Extend the Tailwind configurations
const config = {
  content: [
    // Add content paths specific to your 'ui' package
    // ...
  ],
  theme: {
    extend: {
      // Your 'ui'-specific theme customizations here
    },
  },
  plugins: [
    // Your 'ui'-specific plugins here
  ],
  extend: {
    maxWidth: {
      "300px": "300px",
    },
  },
};

// Merge the 'ui' package config with the client and admin configs
export default {
  ...buyerConfig,
  ...sellerConfig,
  ...config,
};
