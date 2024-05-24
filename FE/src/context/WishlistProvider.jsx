import React, { createContext, useState } from "react";

export const WishlistContext = createContext();

function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  function addWishlist(item) {
    const element = wishlist.find((x) => x._id === item._id);
    !element
      ? setWishlist([...wishlist, { ...item }])
      : setWishlist(wishlist.filter((x) => x._id !== item._id));
  }

  function isExsist(item) {
    return wishlist.some((x) => x._id === item._id) === true;
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addWishlist, isExsist }}>
      {children}
    </WishlistContext.Provider>
  );
}

export default WishlistProvider;
