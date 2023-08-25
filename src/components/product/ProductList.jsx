import React from "react";
import ProductItem from "./ProductItem";
import useProduct from "./../../hooks/useProduct";

const ProductList = () => {
  const { products, loading } = useProduct();
  const loadHelper = [1, 2, 3, 4, 5, 6];

  return (
    <div className=" pt-12 md:pt-20">
      <span className="bg-black text-white mx-4 px-2">Top Sellers</span>
      <ul className="grid grid-cols-2 px-4 gap-2 md:grid-cols-4 md:mx-20 md:gap-20">
        {loading
          ? loadHelper.map((item) => (
              <li key={item} className="h-64 my-4 bg-slate-200 flex"></li>
            ))
          : null}
        {products ? (
          products.map((item) => (
            <ProductItem
              key={item.name}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))
        ) : (
          <p>No products</p>
        )}
      </ul>
    </div>
  );
};

export default ProductList;
