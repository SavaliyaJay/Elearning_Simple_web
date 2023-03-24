import React from "react";
import { ApiTopPropduct } from "./../apifolder/ApiTopPropduct";
import Product from "./Product";

const Products = () => {
  return (
    <>
      <div className="flex flex-wrap p-5 items-center justify-center font-bold ">
        This Are Best Prodact
      </div>
      <div className="flex flex-wrap p-5 items-center justify-center">
        {ApiTopPropduct.map((product, index) => (
          <Product item={product} key={index} />
        ))}
      </div>
    </>
  );
};

export default Products;
