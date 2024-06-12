import { useEffect, useState } from "react";

const FormProduct = ({ onSubmit, initialTitulo, initialPrecio, initialDescripcion }) => {
    const [titulo, setTitulo] = useState(initialTitulo);
    const [precio, setPrecio] = useState(initialPrecio);
    const [descripcion, setDescripcion] = useState(initialDescripcion);

    useEffect(() => {
        setTitulo(initialTitulo);
        setPrecio(initialPrecio);
        setDescripcion(initialDescripcion);
    }, [initialTitulo, initialPrecio, initialDescripcion]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ titulo, precio, descripcion });
        setTitulo('');
        setPrecio('');
        setDescripcion('');
    }

    return (
        <form onSubmit={handleSubmit}>
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
    );
}

export default FormProduct;