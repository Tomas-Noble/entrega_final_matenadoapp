import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="item">
      <h3>{product.nombre}</h3>
      <img src={product.imagen} alt={product.nombre} width={150} />
      <p>${product.precio}</p>
      <Link to={`/item/${product.id}`}>Ver detalle</Link>
    </div>
  );
};

export default Item;
