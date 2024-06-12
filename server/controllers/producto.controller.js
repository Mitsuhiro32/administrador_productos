const Producto = require('../models/producto.model');

module.exports = {
    // Crear un producto nuevo
    createProduct: (req, res) => {
        const { titulo, precio, descripcion } = req.body;

        if (!titulo || !precio || !descripcion) {
            res.statusMessage = "Todos los campos son requeridos";
            return res.status(400).send(res.statusMessage);
        } else if (precio < 0) {
            res.statusMessage = "El precio no puede ser negativo";
            return res.status(400).send(res.statusMessage);
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

    // Obtener un producto por ID
    getOneProduct: (req, res) => {
        Producto.findOne({ _id: req.params.id })
            .then((producto) => res.json(producto))
            .catch((err) => res.json(err));
    },

    // Actualizar un producto por ID
    updateProduct: (req, res) => {
        Producto.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then((producto) => res.json(producto))
            .catch((err) => res.json(err));
    },

    // Borrar un producto por ID
    deleteProduct: (req, res) => {
        Producto.deleteOne({ _id: req.params.id })
            .then((producto) => res.json(producto))
            .catch((err) => res.json(err));
    }
};