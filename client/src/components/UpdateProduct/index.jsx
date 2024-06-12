import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FormProduct from "../FormProduct";

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

    const update = ({titulo, precio, descripcion}) => {
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
            <FormProduct onSubmit={update} initialTitulo={titulo} initialPrecio={precio} initialDescripcion={descripcion} />
            <p>{mensaje}</p>
            <Link to={`/productos/${id}`}>Volver</Link>
        </div>
    );
}

export default UpdateProduct;