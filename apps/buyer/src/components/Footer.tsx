import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 py-4 flex flex-col items-center sm:flex-row justify-around">
      <div className="flex items-center space-between p-1">
        <Link href="/" passHref>
          <img
            src="/shoper.png"
            style={{
              width: "7vw",
              height: "7vh",
              boxSizing: "border-box",
              borderRadius: "3%",
            }}
          />
        </Link>
      </div>
      <div className="text-white font-extrabold my-2 sm:my-0">
        ©2023 Tech Haven. All Rights are reserved
      </div>
      <div className="flex justify-around items-center space-x-4">
        <a href="https://facebook.com">
          {/* Replace with your Facebook icon or logo */}
          <img src="/icons/facebook.svg" alt="Facebook" className="h-6" />
        </a>
        <a href="https://instagram.com">
          {/* Replace with your Instagram icon or logo */}
          <img src="/icons/instagram.svg" alt="Instagram" className="h-6" />
        </a>
        <a href="https://twitter.com/">
          {/* Replace with your Twitter icon or logo */}
          <img src="/icons/twitter.svg" alt="Twitter" className="h-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
