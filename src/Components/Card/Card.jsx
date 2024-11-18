import { RxCrossCircled } from "react-icons/rx";

const Card = ({ item, hendleDeleteCard }) => {
  const { image, name, price, detail } = item;
  return (
    <div>
      <div className="flex justify-between p-8 border-2 rounded-2xl mt-8">
        <div className="flex gap-8 items-center">
          <div>
            <img className="h-[124px] rounded-2xl" src={image} alt="" />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">{name}</h3>
            <p className="text-lg mb-4 text-[rgba(9,8,15,0.6)]">{detail}</p>
            <p className="text-xl font-semibold">Price:${price}</p>
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

export default Card;
