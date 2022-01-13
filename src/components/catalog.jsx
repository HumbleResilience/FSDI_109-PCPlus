import "./catalog.css";
import Product from "./product";
import React, { useEffect, useState } from "react";
import DataService from "../services/dataService";

//load catalog when we get list of products
const Catalog = () => {
  //get products and set products
  //state variables are INMUTABLES cannot change
  let [products, setProducts] = useState([]);

  const loadCatalog = () => {
    console.log("catalog comp loaded");
    let service = new DataService();
    let data = service.getCatalog();

    setProducts(data);

    console.log("Retrieved ", data);
  };

  // hook to do something when the component is rendered the first time(only)
  useEffect(() => {
    //do this when the component loads
    loadCatalog();
  }, []); // [] = dependencies, when a dependency change, run function again

  return (
    <div className="catalog">
      <h1>this is my awesome catalog</h1>

      <h3>We have {products.length} amazing products for you.</h3>

      <div className="products">
        {products.map((prod) => (
          <Product key={prod._id} info={prod}></Product>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
