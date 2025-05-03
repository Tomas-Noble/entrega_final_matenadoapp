const CartItem = ({ item }) => {
    return (
      <div className="card bg-dark text-white my-2">
        <div className="card-body d-flex justify-content-between align-items-center">
          <div>
            <h5 className="card-title">{item.nombre}</h5>
            <p className="card-text">Cantidad: {item.cantidad}</p>
            <p className="card-text">Subtotal: ${item.precio * item.cantidad}</p>
          </div>
          <img src={item.imagen} alt={item.nombre} width={100} />
        </div>
      </div>
    );
  };
  
  export default CartItem;