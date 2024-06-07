const Producto = require('../models/producto.model');

module.exports = {
    // Crear un producto nuevo
    createProduct: (req, res) => {
        const { titulo, precio, descripcion } = req.body;

        if (!titulo || !precio || !descripcion) {
            return res.json({ message: "Todos los campos son requeridos" });
        } else if (!titulo || titulo === "") {
            return res.json({ message: "El titulo es requerido" });
        } else if (!precio || precio === "") {
            return res.json({ message: "El precio es requerido" });
        } else if (!descripcion || descripcion === "") {
            return res.json({ message: "La descripción es requerida" });
        } else if (precio < 0) {
            return res.json({ message: "El precio no puede ser negativo" });
        }
        
        const productoNuevo = {
            titulo: req.body.titulo,
            precio: req.body.precio,
            descripcion: req.body.descripcion
        };

        Producto.create(productoNuevo)
            .then((producto) => res.json(producto))
            .catch((err) => res.json(err));
    },

    // Obtener todos los productos
    getAllProducts: (req, res) => {
        Producto.find()
            .then((productos) => res.json(productos))
            .catch((err) => res.json(err));
    },
};