import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { MainContext } from "../context/MainProvider";

function Basket() {
  const {basket ,addBasket,removeBasket,decreaseBasket} = useContext(MainContext)
  return (
    <>
      <Helmet>
        <title>Basket</title>
      </Helmet>
      {basket.map(x=>
        <div className="card">
          <img style={{width:"400px"}} src={x.img} alt="" />
          <h1>{x.name}</h1>
          <p>{x.price}$</p>
          <button onClick={()=>decreaseBasket(x)}>-</button>
          <span>{x.count}</span>
          <button onClick={()=>addBasket(x)}>+</button>
          <button  onClick={()=>removeBasket(x)}>Remove Basket</button>
        </div>
        )}
    </>
  );
}

export default Basket;
