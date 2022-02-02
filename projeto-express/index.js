const express = require('express');

const app = express();

app.use(express.json());

var usuarios = [];

/*app.get('',(req , res) => {
    res.send('Hello World')
})

app.get('/usuarios',(req , res) => {
    const usuario = {nome:'Marcus Vinicius'}
    res.send(JSON.stringify(usuario))
})

app.post('' ,(req, res) => {
    res.send('Hello World!')
})

app.post('/usuarios' ,(req, res) => {
    console.log(req)
    res.send('Cruzeiro o Maior de Minas!!!')
})*/

app.get('/usuarios' , (req, res) => {
    res.send(JSON.stringify(usuarios));
})

app.post('/usuarios', (req,res) => {
    usuarios.push(req.body);
    req.send(200, usuarios);
})

app.listen(3000,() => {
    console.log('Servidor rodando no endereço http://localhost:3000')
})

