import React from "react";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [bagTotal, setBagTotal] = useState(0);
  const [products, setProducts] = useState([]);
  //fetching the data on mount
  useEffect(() => {
    getProducts();
  }, []);
  //call back function to get the product data from the backend
  const getProducts = async () => {
    const itemsRes = await axios.get("http://192.168.43.159:8000/");
    if (itemsRes.data.length > 0) {
      setLoading(false);
    }
    setProducts(itemsRes.data);
  };

  //fetching the bag data from local strorage
  const orders = JSON.parse(localStorage.getItem("orders")) || [];
  //Seting the bag from the data fetched from local storage
  const [bag, setBag] = useState(orders);
  //haddling the updated bag to local storage
  localStorage.setItem("orders", JSON.stringify(bag));
  //haddling updates to the bag
  const updateBag = (item) => {
    const { name, quantity, price, imageUrl } = item;
    const current = { name, quantity, price, imageUrl };
    setBag((prev) => {
      //finding duplicates
      const duplicates = prev.filter(
        (duplicate) => duplicate.name === current.name
      );
      //if duplicates don't exist
      if (duplicates.length === 0) return [...prev, current];
      const uniqueEntries = prev.filter((entry) => entry.name !== current.name);

      //if duplicates exist and the update is not from the cart
      if (!current.cart)
        return [
          ...uniqueEntries,
          {
            name: duplicates[0].name,
            quantity: duplicates[0].quantity + current.quantity,
            price: current.price,
            imageUrl: duplicates[0].imageUrl,
          },
        ];
    });
  };

  const deleteBagItem = (item) => {
    const updatedBag = bag.filter((entry) => entry.name !== item);
    setBag(updatedBag);
  };

  function quantityBagUpdate(item, value) {
    const position = bag.findIndex((object) => {
      return object.name === item;
    });
    bag[position].quantity = value;
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        bag,
        updateBag,
        deleteBagItem,
        quantityBagUpdate,
        bagTotal,
        setBagTotal,
        loading,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
