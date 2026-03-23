import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-10">
      <div className="max-w-[1100px] mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo */}
        <Link to="/">
          <img src="media/images/logo.svg" alt="logo" className="h-[17px]" />
        </Link>

        {/* Links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link
              className="text-sm text-gray-600 hover:text-[#387ed1]"
              to="/signup"
            >
              SignUp
            </Link>
          </li>
          <li>
            <Link
              className="text-sm text-gray-600 hover:text-[#387ed1]"
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="text-sm text-gray-600 hover:text-[#387ed1]"
              to="/products"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="text-sm text-gray-600 hover:text-[#387ed1]"
              to="/pricing"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              className="text-sm text-gray-600 hover:text-[#387ed1]"
              to="/support"
            >
              Support
            </Link>
          </li>

          {/* Menu Icon */}
          <li className="flex cursor-pointer text-gray-600">
            <AiOutlineMenu size={20} />
          </li>
        </ul>
        {/* Menu button (always visible) */}
        <div className="cursor-pointer md:hidden text-gray-600">
          <AiOutlineMenu size={22} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
