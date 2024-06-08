import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = ({URL_BASE}) => {
    const { id } = useParams();
    const [producto, setProducto] = useState({});

    useEffect(() => {
        axios.get(`${URL_BASE}/productos/${id}`)
            .then((response) => {
                setProducto(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, URL_BASE]);

    return (
        <div className="App">
            <h2>Detalle del Producto</h2>
            <h3>{producto.titulo}</h3>
            <p>Precio: {producto.precio}</p>
            <p>Descripción: {producto.descripcion}</p>
        </div>
    );
}

export default ProductDetail;