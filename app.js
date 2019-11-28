// requires
var express = require('express');
var mongoose = require('mongoose');




// inicializar variables
var app = express();


// conexion a la BD
var URI = 'mongodb://localhost:27017/hospitalDB';
mongoose.connection.openUri(URI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, res) => {

    if (err) throw err;

    console.log('mongodb server running : \x1b[7m %s \x1b[0m', 'online');

});

// rutas
app.get('/',
    (req, res, next) => {

        res
            .status(200)
            .json({
                ok: true,
                mensaje: 'peticion realizada correctamente'
            });

    });


// escuchar peticiones
app.listen(3000, () => {
    console.log('express server puerto 3000 \x1b[41m %s \x1b[0m', 'online');
});