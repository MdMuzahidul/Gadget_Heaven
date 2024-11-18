import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Products = () => {
  const data = useLoaderData();
  
  return (
    <div className="grid grid-cols-3 gap-8 mb-24">
      {data?.map((item) => (
        <Product key={item.id} item={item}></Product>
      ))}
    </div>
  );
};

export default Products;
