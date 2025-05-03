import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    const existing = cart.find((prod) => prod.id === item.id);
    if (existing) {
      setCart(
        cart.map((prod) =>
          prod.id === item.id ? { ...prod, quantity: prod.quantity + quantity } : prod
        )
      );
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const removeItem = (id) => setCart(cart.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);
  const cartQuantity = cart.reduce((acc, prod) => acc + prod.quantity, 0);
  const total = cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0);

  return (
    <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, cartQuantity, total }}>
      {children}
    </CartContext.Provider>
  );
};
