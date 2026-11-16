import { createContext, useContext, useState } from 'react';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [savedProducts, setSavedProducts] = useState([]);

  function toggleSaved(product) {
    setSavedProducts((saved) => (
      saved.some((item) => item.id === product.id)
        ? saved.filter((item) => item.id !== product.id)
        : [...saved, product]
    ));
  }

  return (
    <WishlistContext.Provider value={{ savedProducts, toggleSaved }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}
