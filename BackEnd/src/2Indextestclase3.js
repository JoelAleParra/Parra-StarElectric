const { constants } = require("buffer");
const express = require ("express");
const path = require ("path")
const app = express ();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

const port = 3000;

const Usuario = {
    nombre: 'nombre',
    apellido: 'apellido',
}

app.listen(port, () => {
    console.log("server running on port " + port);
});

app.get ("/", (req, res) => {
    res.render(path.join (__dirname, 'views/index.html', { Usuario }))
})

/*app.get ("/", (req, res) => {
    res.sendFile(path.join (__dirname, 'views/index.html'))
})*/

app.get ("/home", (req, res) => {
    res.sendFile(path.join (__dirname, 'views/home.html'))
})

app.get ("/home/detalle", (req, res) => {
    res.sendFile(path.join (__dirname, 'views/detailproduct.html'))
})
app.get ("/formulario.html", (req, res) => {
    res.sendFile(path.join (__dirname, 'views/formulario.html'))
})

