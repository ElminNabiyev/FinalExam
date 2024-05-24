import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../context/WishlistProvider";

function Wishlist() {
  const { wishlist, addWishlist } = useContext(WishlistContext);

  return (
    <>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      {wishlist.map((x) => (
        <div className="card">
          <i
            style={{ color: "red" }}
            onClick={() => addWishlist(x)}
            className="fa-solid fa-heart"
          ></i>
          <img style={{width:"400px"}} src={x.img} alt="" />
          <h1>{x.name}</h1>
          <p>{x.price}</p>
        </div>
      ))}
    </>
  );
}

export default Wishlist;
