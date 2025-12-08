import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";

const Navbar = () => {
  const isLoggedIn = false;

  return (
    <header className="bg-white sticky z-10 top-0">
      <nav className="max-w-8xl mx-auto px-5 flex items-center justify-between">
        <Link to={"/"} className="text-2xl font-bold text-orange-600 py-4">
          Foodie
        </Link>
        <div className="flex items-center gap-4">
          <Link to={"/"} className="text-gray-700 hover:text-green-400">
            Home
          </Link>
          <Link
            to={"/cart"}
            className="text-gray-700 hover:text-green-600 flex items-center gap-1"
          >
            Cart <FaCartPlus />{" "}
          </Link>
        </div>
        <div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            {isLoggedIn ? "Logout" : "Login"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
