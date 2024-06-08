import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const UpdateProduct = ({ URL_BASE }) => {
    const { id } = useParams();
    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState(0);
    const [mensaje, setMensaje] = useState('');

    useEffect(() => {
        axios.get(`${URL_BASE}/productos/${id}`)
            .then((response) => {
                setTitulo(response.data.titulo);
                setDescripcion(response.data.descripcion);
                setPrecio(response.data.precio);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, URL_BASE]);

    const update = (e) => {
        e.preventDefault();
        const URL = `${URL_BASE}/productos/editar/${id}`;
        const producto = {
            titulo,
            precio,
            descripcion
        };
        axios.put(URL, producto)
            .then((response) => {
                console.log(response);
                setMensaje('Producto actualizado');
            })
            .catch((error) => {
                console.log(error);
                setMensaje('Error al actualizar el producto');
            });
    }

    return (
        <div className="App">
            <h2>Editar Producto</h2>
            <form onSubmit={update}>
                <div>
                    <label>Titulo:</label>
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} />
                </div>
                <div>
                    <label>Descripción:</label>
                    <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
                </div>
                <button type="submit">Guardar</button>
            </form>
            <p>{mensaje}</p>
            <Link to={`/productos/${id}`}>Volver</Link>
        </div>
    );
}

export default UpdateProduct;