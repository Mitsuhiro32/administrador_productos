import { useState } from 'react';
import './App.css';
import FormProduct from './components/FormProduct';

function App() {
  const [listaProductos, setListaProductos] = useState([]);
  const URL_BASE = 'http://localhost:8000/api';

  const agregarProducto = (nuevoProducto) => {
    setListaProductos([...listaProductos, nuevoProducto]);
  }

  return (
    <div className="App">
      <FormProduct agregarProducto={agregarProducto} URL_BASE={URL_BASE} />
    </div>
  );
}

export default App;
