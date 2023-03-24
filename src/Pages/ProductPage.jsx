import React from "react";

const ProductPage = () => {
  return (
    <>
      
      <div className="flex justify-center mobile:flex-col mobile:mt-4 mobile:p-3 mt-10 mb-10">
        <div className="flex-1 flex items-center justify-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0240/7285/products/KNITPULLOVER-PISTACHIO-2_360x.jpg?v=1642545216"
            className="product_img"
            alt="product_image"
          />
        </div>
        <div className="flex-[1.3] flex flex-col items-start  justify-items-center  mobile:items-center">
          <h1 className="title text-[40px] mobile:text-[30px]">
            Cream Hoody Orignal
          </h1>
          <p className="disription pr-[4rem] text-justify mt-4 mobile:pr-0">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            accusamus, culpa neque ex sunt placeat. Vitae quia qui quo,
            doloribus dolore aliquam veniam. Natus totam odit consequatur
            consectetur delectus nihil!
          </p>
          <div className="flex flex-col place-self-start">
            <p className="mt-5 text-3xl">
              Price: <b>$70</b>
            </p>

            <div className="colors flex mt-5 text-2xl">
              Colors
              <div className="colorSelect bg-red-600 "></div>
              <div className="colorSelect bg-blue-600 "></div>
              <div className="colorSelect bg-yellow-400 "></div>
            </div>

            <div className="mt-5 text-2xl">
              Size
              <select className="border-[2px] border-silver rounded-md ml-5">
                <option selected>Select</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
                <option>XL</option>
              </select>
            </div>
            <div className="mt-7">
              {/* <Counter /> */}jak
            </div>
          </div>

          <button className="text-white bg-[#1c0b9a] rounded-md shadow-md mt-[30px] p-2">
            Add to Cart
          </button>
        </div>
      </div>
    
    </>
  );
};

export default ProductPage;
