import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  useEffect(() => {
    const itemsFromStorage = localStorage.getItem("cartItems");
    console.log("itemsFromStorage=>", itemsFromStorage);
    if (itemsFromStorage) {
      setCartItems([...JSON.parse(itemsFromStorage)]);
      setIsLoaded(true);
    }
  }, []);

  function addItemToCart(item) {
    const arr = cartItems;
    //item add nahn he , to add krdo
    //agr item add he , to uski quantity barhado
    //check if item exist
    const itemIndex = cartItems.findIndex((data) => data.id == item.id);
    if (itemIndex == -1) {
      // item array mein nahn he
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setCartItems([...arr]);
  }

  function lessQuanityFromCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    arr[itemIndex].quantity--;
    setCartItems([...arr]);
  }

  function removeItemFromCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    arr.splice(itemIndex, 1);
    setCartItems([...arr]);
  }

  function isItemAdded(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    if (itemIndex == -1) {
      return null;
    } else {
      return arr[itemIndex];
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        lessQuanityFromCart,
        removeItemFromCart,
        isItemAdded,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
