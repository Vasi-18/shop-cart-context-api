import { useContext } from "react";
import DataContext from "../Context/DataContext";
import Content from "./Content";

const Product = () => {
  const { products } = useContext(DataContext);

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {products.map((product, index) => (
            <Content
              key={index}
              cartProduct = {[product.images,product.title,product.price,product.description,product.rating]}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
