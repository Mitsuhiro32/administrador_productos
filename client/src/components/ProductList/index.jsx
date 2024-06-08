import { Link } from "react-router-dom";

const ProductList = ({ titulo, id, eliminarProducto}) => {
    return (
        <div className="product">
            <h3 id={id}>{titulo}</h3>
            <Link to={`/productos/${id}`}>Ver detalle</Link>
            <button onClick={() => eliminarProducto(id)}>Eliminar</button>
        </div>
    )
}

export default ProductList;