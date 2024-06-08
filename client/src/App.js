import { useEffect, useState } from 'react';
import './App.css';
import FormProduct from './components/FormProduct';
import axios from 'axios';
import ProductList from './components/ProductList';
import { Route, Routes } from 'react-router-dom';
import ProductDetail from './components/ProductDetail';

function App() {
  const [listaProductos, setListaProductos] = useState([]);
  const URL_BASE = 'http://localhost:8000/api';

  const agregarProducto = (nuevoProducto) => {
    setListaProductos([...listaProductos, nuevoProducto]);
  }

  useEffect(() => {
    axios.get(`${URL_BASE}/productos`)
      .then((response) => {
        setListaProductos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Routes>
      <Route path='/' element={
        <div className="App">
          <FormProduct agregarProducto={agregarProducto} URL_BASE={URL_BASE} />
          <hr />
          <h2>Lista de Productos</h2>
          {listaProductos.map((producto, idx) => {
            return <ProductList key={idx} titulo={producto.titulo} id={producto._id} />
          })}
        </div>
      } />
      <Route path="/productos/:id" element={<ProductDetail URL_BASE={URL_BASE} />} />
    </Routes>
  );
}

export default App;
