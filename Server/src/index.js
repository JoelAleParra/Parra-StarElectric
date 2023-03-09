const express = require ("express");
const path = require ("path")
const app = express ();

app.use(express.static(__dirname + '/public'));

const port = 3000;

app.listen(port, () => {
    console.log("server running on port " + port);
});

app.get ("/", (req, res) => {
    res.sendFile(path.join (__dirname, 'views/home.html'))
})

app.get ("/detailproduct", (req, res) => {
    res.sendFile(path.join (__dirname, 'views/detailproduct.html'))
})

app.get ("/cart", (req, res) => {
    res.sendFile(path.join (__dirname, 'views/cart.html'))
})
app.get ("/login", (req, res) => {
    res.sendFile(path.join (__dirname, 'views/login.html'))
})
app.get ("/register", (req, res) => {
    res.sendFile(path.join (__dirname, 'views/register.html'))
})


