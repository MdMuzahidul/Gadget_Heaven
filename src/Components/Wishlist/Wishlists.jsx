import React, { useContext } from "react";
import Wishlist from "./Wishlist";
import { AppContext } from "../../context/AppContext";

const Wishlists = () => {
  const { wishlist, setWishlist } = useContext(AppContext);
  const hendleDeleteCard = (item) => {
    const newCart = wishlist.filter((items) => items.id !== item.id);
    setWishlist(newCart);
  };
  return (
    <div>
      <div>
        <h3 className="text-2xl font-bold my-12">WishList</h3>
      </div>
      <div className="mb-64">
        {wishlist.map((item) => (
          <Wishlist
            key={item.id}
            hendleDeleteCard={hendleDeleteCard}
            item={item}
          ></Wishlist>
        ))}
      </div>
    </div>
  );
};
export default Wishlists;
