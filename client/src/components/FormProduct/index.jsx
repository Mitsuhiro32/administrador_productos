import { useState } from "react";
import axios from "axios";

const FormProduct = ({ agregarProducto, URL_BASE }) => {
    const [titulo, setTitulo] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const URL = `${URL_BASE}/productos/nuevo`;

        axios.post(URL, {
            titulo,
            precio,
            descripcion
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                console.log(response.data);
                agregarProducto(response.data);
                setTitulo('');
                setPrecio('');
                setDescripcion('');

                if (response.data.message) {
                    setError(response.data.message);
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <h2>Gestión de Productos</h2>
            <span>{error}</span>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="titulo">Titulo:</label>
                    <input type="text" id="titulo" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="precio">Precio:</label>
                    <input type="number" id="precio" name="precio" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción:</label>
                    <input type="text" id="descripcion" name="descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Crear</button>
                </div>
            </form>
        </>
    )
}

export default FormProduct;