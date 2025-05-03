
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <Link to="/carrito" className="cart-widget">
      🛒 {cartQuantity > 0 && <span>{cartQuantity}</span>}
    </Link>
  );
};

export default CartWidget;
