import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductDetail = ({URL_BASE, eliminarProducto}) => {
    const { id } = useParams();
    const navigate = useNavigate();
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
            <div className="detail">
                <h2>Detalle del Producto</h2>
                <h3>{producto.titulo}</h3>
                <p>Precio: {producto.precio}</p>
                <p>Descripción: {producto.descripcion}</p>
            </div>
            <div className="link">
                <Link to="/">Volver</Link>
                <Link to={`/productos/editar/${id}`}>Editar</Link>
                <button onClick={() => {
                    eliminarProducto(id)
                    navigate('/');
                }}>Eliminar</button>
            </div>
        </div>
    );
}

export default ProductDetail;