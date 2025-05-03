import { useState } from 'react';

const ItemCount = ({ stock, onAdd }) => {
  const [count, setCount] = useState(1);

  const increase = () => count < stock && setCount(count + 1);
  const decrease = () => count > 1 && setCount(count - 1);

  return (
    <div className="item-count">
      <button onClick={decrease}>-</button>
      <span>{count}</span>
      <button onClick={increase}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;