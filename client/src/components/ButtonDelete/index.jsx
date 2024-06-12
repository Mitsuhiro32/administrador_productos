import axios from "axios";
import { useNavigate } from "react-router-dom";

const ButtonDelete = ({ id, URL_BASE}) => {
    const navigate = useNavigate();

    const eliminarProducto = () => {
        const confirmar = window.confirm('¿Estás seguro de eliminar este producto?');
        const URL = `${URL_BASE}/productos/eliminar/${id}`;

        if (confirmar) {
            axios.delete(URL)
                .then((response) => {
                    console.log(response.data);
                    navigate('/');
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    }

    return (
        <button onClick={eliminarProducto}>Eliminar</button>
    )
}

export default ButtonDelete;