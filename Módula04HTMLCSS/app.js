const express = require('express');

let app = express();

app.get('/', (req,res) => res.send('Olá Mundo!'));

app.get('/contatos', (req,res) => res.send(['contato1' , 'contato2' , 'contato3']));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));