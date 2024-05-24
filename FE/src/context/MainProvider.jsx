import React, { createContext } from "react";
import { useState } from "react";

export const MainContext = createContext();

function MainProvider({ children }) {
  const [basket, setBasket] = useState([]);

  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    if (index !== -1) {
      basket[index].count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  }
  function removeBasket(item) {
    setBasket(basket.filter((x) => x._id !== item._id));
  }

  function decreaseBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);
    const element = basket[index];
    if (element.count > 1) {
      element.count--;
      setBasket([...basket]);
    }
  }
  return (
    <MainContext.Provider
      value={{ basket, addBasket, removeBasket, decreaseBasket }}
    >
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
