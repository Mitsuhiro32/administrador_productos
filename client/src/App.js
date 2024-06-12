import { useEffect, useState } from 'react';
import './App.css';
import CreateProduct from './components/CreateProduct';
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
  }, [listaProductos]);

  const agregarProducto = (nuevoProducto) => {
    setListaProductos([...listaProductos, nuevoProducto]);
  }

  return (
    <Routes>
      <Route path='/' element={
        <div className="App">
          <CreateProduct agregarProducto={agregarProducto} URL_BASE={URL_BASE} />
          <hr />
          <h2>Lista de Productos</h2>
          {listaProductos.map((producto, idx) => {
            return <ProductList key={idx} titulo={producto.titulo} id={producto._id} URL_BASE={URL_BASE} />
          })}
        </div>
      } />
      <Route path="/productos/:id" element={<ProductDetail URL_BASE={URL_BASE} />} />
      <Route path="/productos/editar/:id" element={<UpdateProduct URL_BASE={URL_BASE} />} />
    </Routes>
  );
}

export default App;
