import { NavLink } from "react-router-dom";

const Catagory = () => {
  return (
    <div className="flex flex-col gap-6 border-2 p-6 rounded-2xl">
      <NavLink to="/">
        <button className="btn py-4 px-6 font-semibold rounded-3xl">
          All Product
        </button>
      </NavLink>
      <NavLink to="laptop">
        <button className="btn py-4 px-6 font-semibold rounded-3xl">
          Laptops
        </button>
      </NavLink>
      <NavLink to="phone">
        <button className="btn py-4 px-6 font-semibold rounded-3xl">
          Phones
        </button>
      </NavLink>
      <NavLink to="accessories">
        <button className="btn py-4 px-6 font-semibold rounded-3xl">
          Accessories
        </button>
      </NavLink>
      <NavLink to="smartwatches">
        <button className="btn py-4 px-6 font-semibold rounded-3xl">
          Smart Watches
        </button>
      </NavLink>
      <NavLink to="macbook">
        <button className="btn py-4 px-6 font-semibold rounded-3xl">
          MacBook
        </button>
      </NavLink>
      <NavLink to="iphone">
        <button className="btn py-4 px-6 font-semibold rounded-3xl">
          Iphone
        </button>
      </NavLink>
    </div>
  );
};

export default Catagory;
