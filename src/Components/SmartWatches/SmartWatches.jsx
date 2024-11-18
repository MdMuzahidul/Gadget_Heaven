import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const SmartWatches = () => {
  const data = useLoaderData();
  const SmartWatches = data.filter((item) => item.category === "Smart Watches");
  return (
    <div className="grid grid-cols-3 gap-8 mb-24">
      {SmartWatches.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </div>
  );
};

export default SmartWatches;
