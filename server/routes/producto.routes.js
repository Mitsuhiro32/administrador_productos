const productoController = require('../controllers/producto.controller');

module.exports = (app) => {
    app.post('/api/productos/nuevo', productoController.createProduct);
    app.get('/api/productos', productoController.getAllProducts);
};