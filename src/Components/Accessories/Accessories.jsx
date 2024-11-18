import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Accessories = () => {
  const data = useLoaderData();
  const accessories = data.filter((item) => item.category === "Accessories");
  return (
    <div className="grid grid-cols-3 gap-8 mb-24">
      {accessories.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </div>
  );
};

export default Accessories;
