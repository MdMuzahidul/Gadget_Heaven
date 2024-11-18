import React, { useContext } from "react";
import Card from "./Card";
import { AppContext } from "../../context/AppContext";
import { GiSettingsKnobs } from "react-icons/gi";
import { MdOutlineVerified } from "react-icons/md";

const Cards = () => {
  const { cart, setCart, cost, setCost } = useContext(AppContext);

  const hendleDeleteCard = (item) => {
    const newCart = cart.filter((items) => items.id !== item.id);
    setCart(newCart);
    setCost(cost - item.price);
  };

  const hendleClearCard = () => {
    setCart([]);
    setCost(0);
  };

  const sortByPrice = () => {
    const sortedCart = [...cart].sort((a, b) => b.price - a.price);
    setCart(sortedCart);
  };

  return (
    <div>
      <div className="flex justify-between mt-8 items-center">
        <div>
          <h3 className="text-2xl font-bold">Cart</h3>
        </div>
        <div className="flex justify-between items-center gap-10">
          <h3 className="text-2xl font-bold">Total cost: {cost}</h3>
          <button
            onClick={sortByPrice}
            className="flex items-center gap-3 border-2 border-blue-700 py-4 px-6 rounded-3xl bg-white text-blue-800 font-semibold text-lg"
          >
            Sort By Price <GiSettingsKnobs />
          </button>
          <button
            onClick={() => document.getElementById("my_modal_1").showModal()}
            className="border-2 border-blue-700 py-4 px-6 rounded-3xl bg-white text-blue-800 font-semibold text-lg"
          >
            Purchase
          </button>
        </div>
      </div>
      {/* Mapping */}
      <div className="mb-10 min-h-52">
        {cart.map((item) => (
          <Card
            key={item.id}
            hendleDeleteCard={() => hendleDeleteCard(item)}
            item={item}
          />
        ))}
      </div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <div className="flex justify-center">
            <div className="flex items-center justify-center rounded-full h-20 w-20 text-6xl text-green-900 bg-green-600">
              <MdOutlineVerified />
            </div>
          </div>
          <h3 className="font-bold mt-4 text-center text-3xl">
            Payment Successfully
          </h3>
          <p className="pt-4 text-center">
            Thanks for purchasing. <br />
            Total:{cost}
          </p>
          <div className="modal-action flex justify-center">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={() => hendleClearCard()} className="btn">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Cards;
