import "./productList.css";
import Product from "../product/Product";
import { data } from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects we have worked on</h1>
        <p className="pl-desc">
          Here are some beautiful designs we have worked on click to visit any
          of the websites
        </p>
      </div>
      <div className="pl-list">
        {data.map((each) => (
          <Product key={each.id} img={each.img} link={each.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
