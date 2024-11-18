import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Iphone = () => {
  const data = useLoaderData();
  const iphone = data.filter((item) => item.category === "Iphone");
  return (
    <div className="grid grid-cols-3 gap-8 mb-24">
      {iphone.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </div>
  );
};

export default Iphone;
