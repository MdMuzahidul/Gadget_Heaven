import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Phone = () => {
  const data = useLoaderData();
  const Phone = data.filter((item) => item.category === "Phones");
  return (
    <div className="grid grid-cols-3 gap-8 mb-24">
      {Phone.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </div>
  );
};

export default Phone;
