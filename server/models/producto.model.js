const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "El titulo del producto es requerido"]
    },
    precio: {
        type: Number,
        required: [true, "El precio del producto es requerido"],
        min: [0, "El precio del producto no puede ser negativo"]
    },
    descripcion: {
        type: String,
        required: [true, "La descripción del producto es requerida"]
    }
}, { timestamps: true });

module.exports = mongoose.model("Producto", ProductoSchema);