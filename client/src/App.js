import { useEffect, useState } from 'react';
import './App.css';
import FormProduct from './components/FormProduct';
import axios from 'axios';
import ProductList from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';
import UpdateProduct from './components/UpdateProduct';

function App() {
  const [listaProductos, setListaProductos] = useState([]);
  const URL_BASE = 'http://localhost:8000/api';

  useEffect(() => {
    axios.get(`${URL_BASE}/productos`)
      .then((response) => {
        setListaProductos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const agregarProducto = (nuevoProducto) => {
    setListaProductos([...listaProductos, nuevoProducto]);
  }

  const eliminarProducto = (productId) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar este producto?');
    const URL = `${URL_BASE}/productos/eliminar/${productId}`;

    if (confirmar) {
      axios.delete(URL)
        .then((response) => {
          console.log(response.data);
          window.location.reload();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  return (
    <Routes>
      <Route path='/' element={
        <div className="App">
          <FormProduct agregarProducto={agregarProducto} URL_BASE={URL_BASE} />
          <hr />
          <h2>Lista de Productos</h2>
          {listaProductos.map((producto, idx) => {
            return <ProductList key={idx} titulo={producto.titulo} id={producto._id} eliminarProducto={eliminarProducto} />
          })}
        </div>
      } />
      <Route path="/productos/:id" element={<ProductDetail URL_BASE={URL_BASE} eliminarProducto={eliminarProducto} />} />
      <Route path="/productos/editar/:id" element={<UpdateProduct URL_BASE={URL_BASE} />} />
    </Routes>
  );
}

export default App;
