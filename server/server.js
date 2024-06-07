const express = require("express");
const cors = require("cors");
const RutasProducto = require("./routes/producto.routes");
const app = express();

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));
app.use(cors({
        origin: "http://localhost:3000",
    }
))

RutasProducto(app);

app.listen(8000, () => console.log("El servidor está encendido en el puerto 8000"));