import { useContext, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import "../Navbar/Nabvar.css";
const Navbar = () => {
  const { cart, wishlist } = useContext(AppContext);
  const location = useLocation();
  useEffect(() => {
    console.log(location);
  }, [location]);
  const link = (
    <>
      <NavLink to="/" className={`font-bold mr-8`}>
        Home
      </NavLink>
      <NavLink to="statistics" className={`font-bold mr-8`}>
        Statistics
      </NavLink>
      <NavLink to="dashboard" className={`font-bold mr-8`}>
        Dashboard
      </NavLink>
      <NavLink to="about" className="font-bold mr-8">
        About
      </NavLink>
    </>
  );

  return (
    <div
      className={`navbar pb-8 w-11/12 mx-auto mt-4 ${
        location.pathname === "/" ? "bg-[#9538E2] rounded-t-2xl text-white" : ""
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Gadget Heaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn mr-6 text-2xl">
          <FaShoppingCart />
          {cart.length}
        </a>
        <a className="btn text-2xl">
          <FaRegHeart />
          {wishlist.length}
        </a>
      </div>
    </div>
  );
};

export default Navbar;
