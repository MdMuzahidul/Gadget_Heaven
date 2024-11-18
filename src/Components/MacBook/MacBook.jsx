import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const MacBook = () => {
  const data = useLoaderData();
  const macbook = data.filter((item) => item.category === "MacBook");
  return (
    <div className="grid grid-cols-3 gap-8 mb-24">
      {macbook.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </div>
  );
};

export default MacBook;
