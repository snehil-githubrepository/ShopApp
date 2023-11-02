import Link from "next/link";
import SearchBar from "ui/components/SearchBar";
import { useState } from "react";

const Appbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  function handleSearch(query: string) {
    console.log(query);
  }

  return (
    <nav className="bg-blue-700  flex justify-around h-66">
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
      <div className="p-3">
        <SearchBar onSearch={(query) => handleSearch(query)} />
      </div>

      <div className="flex items-center space-x-4 p-3">
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="bg-gray-200 rounded-full p-2 hover:bg-gray-400 hover:text-white cursor-pointer"
          >
            Profile <span className="ml-1">▼</span>
          </button>
          <ul
            className={`${
              isDropdownOpen
                ? "opacity-100 visible translate-y-2"
                : "opacity-0 invisible"
            } absolute right-0 mt-2 space-y-1 p-2 bg-white rounded-md shadow-lg transition-transform duration-300 transform`}
          >
            <li>
              <Link href="/profile" passHref>
                My Profile
              </Link>
            </li>
            <li>
              <Link href="/orders" passHref>
                Orders
              </Link>
            </li>
            <li>
              <Link href="/saved" passHref>
                Saved
              </Link>
            </li>
            <li>
              <Link href="/notifications" passHref>
                Notifications
              </Link>
            </li>
            <li>
              <Link href="/logout" passHref>
                Logout
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/cart" className="text-white text-lg flex items-center">
          <span className="ml-1 p-2">
            <img src="/cart.png" style={{ width: "24px" }} />
          </span>
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Appbar;
