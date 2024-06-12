import { useState } from "react";
import axios from "axios";
import FormProduct from "../FormProduct";

const CreateProduct = ({ agregarProducto, URL_BASE}) => {
    /* const [titulo, setTitulo] = useState('');
    const [precio, setPrecio] = useState('');
    const [descripcion, setDescripcion] = useState(''); */
    const [error, setError] = useState('');

    const addProduct = ({ titulo, precio, descripcion }) => {
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
                setError('');
            })
            .catch((error) => {
                setError(error.response.data);
                console.log(error);
            });
    }

    return (
        <>
            <h2>Gestión de Productos</h2>
            {error && <div style={{ color: 'red' }}>{error}</div>}
            <FormProduct onSubmit={addProduct} initialTitulo={''} initialPrecio={''} initialDescripcion={''} />
        </>
    )
}

export default CreateProduct;