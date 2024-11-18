import { Link } from "react-router-dom";

const Product = ({ item }) => {
  const { id, image, name, price } = item;

  return (
    <div className="flex flex-col border-2 p-6 rounded-3xl">
      <div className="h-[60%] w-[90%] mx-auto">
        <img className="h-full rounded-2xl" src={image} alt="" />
      </div>
      <div className="flex-grow flex flex-col items-start">
        <h2 className="text-2xl font-semibold my-4">{name}</h2>
        <h3 className="text-xl font-medium mb-4">Price: {price}K</h3>
        <Link to={`/details/${id}`}>
          <button className="btn text-[#9538E2] font-semibold text-xl bg-white border-blue-800">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Product;
