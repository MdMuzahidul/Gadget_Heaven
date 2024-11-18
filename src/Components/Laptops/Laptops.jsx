import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";

const Laptops = () => {
    const data = useLoaderData();
    const laptop=data.filter(item=>item.category==="Laptops")
    return (
      <div className="grid grid-cols-3 gap-8 mb-24">
        {laptop.map((item) => (
          <Product key={item.id} item={item}></Product>
        ))}
      </div>
    );
};

export default Laptops;