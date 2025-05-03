import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({ product }) => {
  const [added, setAdded] = useState(false);
  const { addItem } = useContext(CartContext);

  const handleAdd = (cantidad) => {
    addItem(product, cantidad);
    setAdded(true);
  };

  if (!product) {
    return <p>Producto no encontrado</p>; // Manejo de error si el producto no existe
  }

  return (
    <div className="item-detail text-white">
      <h2>{product.nombre}</h2>
      <img src={product.imagen} alt={product.nombre} width={200} />
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      <p>Stock: {product.stock}</p>
      {/* Si ya se añadió al carrito, mostrar enlace al carrito, de lo contrario mostrar ItemCount */}
      {added ? (
        <Link to="/carrito" className="btn btn-success">Ir al carrito</Link>
      ) : (
        <ItemCount stock={product.stock} onAdd={handleAdd} />
      )}
    </div>
  );
};

export default ItemDetail;