const express = require('express');
const app = express();
const port = 3000;
app.listen(port, () => console.log('servidor corriendo en el puerto ' + port));

app.get('/',(req, res) => {
    res.send('home');
});

app.get('/contactos',(req,res)=> {
    res.send('Pagina de contactos')
});
app.get('/productos',(req,res)=> {
    res.send('Pagina de productos')
});
