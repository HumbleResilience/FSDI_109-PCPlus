import "./product.css";
import { useState } from "react";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const handleQuantityChange = (val) => {
    setQuantity(val);
  };

  const getTotal = () => {
    let total = quantity * props.info.price;
    // any discounts?

    return total.toFixed(2);
  };

  const handleAdd = () => {
    //when you click the cart button do this
    console.log("Here is your cart");
  };

  return (
    <div className="product">
      <label className="prod-category display">{props.info.category}</label>
      <img
        className="product-img"
        src={"/images/" + props.info.image}
        alt="Gaming Computer"
      ></img>

      <h2>{props.info.title}</h2>

      <div>
        <label className="total">${getTotal()}</label>
        <label className="price">${props.info.price.toFixed(2)}</label>
      </div>

      <QuantityPicker onChange={handleQuantityChange}></QuantityPicker>
      <button className="btn btn-sm btn-info checkoutBtn" onClick={handleAdd}>
        <i className="fa fa-cart-plus" aria-hidden="true"></i>
      </button>
    </div>
  );
};

export default Product;
