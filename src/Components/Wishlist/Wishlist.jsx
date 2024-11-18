import { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { AppContext } from "../../context/AppContext";

const Wishlist = ({ item, hendleDeleteCard }) => {
  const { cart, setCart, cost, setCost } = useContext(AppContext);
  const { image, name, price, detail } = item;

  const addToCard = (product) => {
    const newProduct = cart.find((item) => item.id === product.id);
    if (!newProduct) {
      const newCard = [...cart, product];
      setCart(newCard);
      setCost(cost + product.price);
    }
  };

  return (
    <div>
      <div className="flex justify-between p-8 border-2 rounded-2xl mt-6">
        <div className="flex gap-8 items-center">
          <div>
            <img className="h-[200px] rounded-2xl" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">{name}</h3>
            <p className="text-lg mb-4 text-[rgba(9,8,15,0.6)]">{detail}</p>
            <p className="text-xl font-semibold mb-4">Price: ${price}</p>
            <button
              onClick={() => {
                addToCard(item);
                hendleDeleteCard(item);
              }}
              className="btn rounded-[32px] font-bold text-white bg-purple-600 hover:bg-purple-600"
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div className="text-4xl mr-20">
          <button onClick={() => hendleDeleteCard(item)}>
            <RxCrossCircled />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
