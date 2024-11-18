import { useLoaderData, useParams } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { LuHeart } from "react-icons/lu";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Details = () => {
  const { cart, setCart, cost, setCost, wishlist, setWishlist } =
    useContext(AppContext);
  const data = useLoaderData();
  const { id } = useParams();
  const productId = parseInt(id);
  const product = data.find((item) => item.id === productId);
  const { image, name, price, detail, specification, rating } = product;

  const addToCart = (product) => {
    const newProduct = cart.find((item) => item.id === product.id);
    if (!newProduct) {
      const newCart = [...cart, product];
      setCart(newCart);
      setCost(parseFloat((cost + product.price).toFixed(2)));
      toast.success(`${product.name} has been added to the cart.`, {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.info(`${product.name} is already in the cart.`, {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  const addToWishList = (product) => {
    const newProduct = wishlist.find((item) => item.id === product.id);
    if (!newProduct) {
      const newWishlist = [...wishlist, product];
      setWishlist(newWishlist);
      toast.success(`${product.name} has been added to the wishlist.`, {
        position: "top-center",
        autoClose: 1000,
      });
    } else {
      toast.info(`${product.name} is already in the wishlist.`, {
        position: "top-center",
        autoClose: 1000,
      });
    }
  };

  return (
    <div className="relative mb-[320px]">
      <ToastContainer />
      <div className="bg-blue-900 pt-8 text-center">
        <h3 className="text-3xl font-bold text-white">Product Details</h3>
        <p className="max-w-3xl mx-auto mt-4 text-white pb-[300px]">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="absolute top-[180px] left-[230px]">
        <div className="border-2 p-6 flex rounded-2xl gap-8 w-[1280px] mx-auto bg-white">
          <div className="h-[500px] w-[600px]">
            <img className="h-full w-full rounded-xl" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4">{name}</h3>
            <p className="text-xl font-semibold mb-4">Price: ${price}</p>
            <p className="text-lg text-[rgba(9,8,15,0.6)]">{detail}</p>
            <ul className="text-lg font-bold mb-4">
              Specification:
              <div className="text-lg text-[rgba(9,8,15,0.6)] font-normal">
                {specification.map((data, indx) => (
                  <li key={indx}>{data}</li>
                ))}
              </div>
            </ul>
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-4">Rating: {rating}</h3>
            </div>
            <div className="flex items-center gap-8">
              <button
                onClick={() => addToCart(product)}
                className="btn font-bold text-lg text-white bg-blue-800"
              >
                Add To Cart <TiShoppingCart />
              </button>
              <div className="border-2 h-12 w-12 rounded-full flex items-center justify-center">
                <button
                  onClick={() => addToWishList(product)}
                  className="btn text-2xl"
                >
                  <LuHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
