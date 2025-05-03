import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, getFirestore, Timestamp } from "firebase/firestore";

const CheckoutForm = () => {
  const { cart, total, clearCart } = useContext(CartContext);
  const [orderId, setOrderId] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const db = getFirestore();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const order = {
      buyer: form,
      items: cart,
      total,
      date: Timestamp.fromDate(new Date()),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      setOrderId(id);
      clearCart();
    });
  };

  return (
    <div className="container text-white mt-5">
      <h2>Checkout</h2>
      {orderId ? (
        <div className="alert alert-success mt-3">
          ¡Gracias por tu compra! Tu número de orden es: <strong>{orderId}</strong>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-dark p-4 rounded">
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input className="form-control" name="name" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" name="email" onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Teléfono</label>
            <input className="form-control" name="phone" onChange={handleChange} required />
          </div>
          <button className="btn btn-warning">Confirmar compra</button>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;