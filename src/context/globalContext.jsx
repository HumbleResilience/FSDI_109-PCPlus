import React, { useState } from "react";
import storeContext from "./storeContext";

const GlobalContext = (props) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState({});

  const myAddProductToCart = (product) => {
    console.log("adding to cart", product);

    let copy = [...cart]; //create copy of cart //cannot modify cart directly. create copy first
    copy.push(product); //modify copy
    setCart(copy); //set copy
  };

  const myRemoveProductFromCart = () => {
    console.log("Removing from cart");
  };

  return (
    <storeContext.Provider
      value={{
        cart: cart,
        user: user,

        addProductToCart: myAddProductToCart,
        removeProductFromCart: myRemoveProductFromCart,
      }}
    >
      {props.children}
    </storeContext.Provider>
  );
};

export default GlobalContext;
