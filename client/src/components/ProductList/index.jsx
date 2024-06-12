import { Link } from "react-router-dom";
import ButtonDelete from "../ButtonDelete";

const ProductList = ({ titulo, id, URL_BASE}) => {
    return (
        <div className="product">
            <h3 id={id}>{titulo}</h3>
            <Link to={`/productos/${id}`}>Ver detalle</Link>
            <ButtonDelete id={id} URL_BASE={URL_BASE}/>
        </div>
    )
}

export default ProductList;