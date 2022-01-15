import "./product.css";
import { useState, useContext } from "react";
import QuantityPicker from "./quantityPicker";
import storeContext from "../context/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const add2Cart = useContext(storeContext).addProductToCart;

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

    let prod = {
      ...props.info,
      quantity: quantity,
    };

    add2Cart(prod); // call the function that exist in the context(check the import)
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
