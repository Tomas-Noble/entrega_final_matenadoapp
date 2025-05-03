import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, total, clearCart } = useContext(CartContext);

  // Verificamos si el carrito está vacío
  if (!cart || cart.length === 0) {
    return (
      <div className="text-center text-white">
        <p>Tu carrito está vacío</p>
        <Link to="/" className="btn btn-primary">Volver a la tienda</Link>
      </div>
    );
  }

  return (
    <div className="container my-4 text-white">
      <h2>Tu carrito</h2>
      {/* Renderizamos los productos en el carrito */}
      {cart.map((prod) => <CartItem key={prod.id} item={prod} />)}
      
      {/* Mostrar total solo si es mayor que 0 */}
      {total > 0 && <h3>Total: ${total}</h3>}
      
      <div className="d-flex gap-2">
        <button className="btn btn-danger" onClick={clearCart}>Vaciar carrito</button>
        <Link to="/checkout" className="btn btn-success">Finalizar compra</Link>
      </div>
    </div>
  );
};

export default Cart;