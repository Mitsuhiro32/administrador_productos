const productoController = require('../controllers/producto.controller');

module.exports = (app) => {
    app.post('/api/productos/nuevo', productoController.createProduct);
    app.get('/api/productos', productoController.getAllProducts);
    app.get('/api/productos/:id', productoController.getOneProduct);
    app.put('/api/productos/editar/:id', productoController.updateProduct);
    app.delete('/api/productos/eliminar/:id', productoController.deleteProduct);
};