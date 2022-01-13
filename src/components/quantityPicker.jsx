import { useState } from "react";
import "./quantityPicker.css";

const QuantityPicker = (props) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    //add
    console.log("increased");
    let val=quantity+1;
    setQuantity(val);
    props.onChange(val);
  };

  const decrement = () => {
    //subtract
    console.log("Decreased");
    if (quantity > 1) {
      let val=quantity-1;
      setQuantity(val);
      props.onChange(val);
    }
  };

  return (
    <div className="quantityPicker">
      <button  className="btn btn-sm btn-dark"onClick={decrement}>-</button>
      <label>{quantity}</label>
      <button className="btn btn-sm btn-dark" onClick={increment}>+</button>
    </div>
  );
}

export default QuantityPicker;
