import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    setLoading(true);
    const productosRef = categoriaId
      ? query(collection(db, 'productos'), where('categoria', '==', categoriaId))
      : collection(db, 'productos');

    getDocs(productosRef)
      .then((res) => {
        const items = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setProducts(items);
      })
      .finally(() => setLoading(false));
  }, [categoriaId]);

  if (loading) return <p>Cargando productos...</p>;
  if (products.length === 0) return <p>No hay productos en esta categoría.</p>;

  return <ItemList products={products} />;
};

export default ItemListContainer;
