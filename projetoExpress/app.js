const express = require("express");

let app = express();

app.get('/', (req , res)=> res.send('Olá Mundo'))

    app.listen(3000, () =>{
        console.log("Levantando um servidor com Express")
    })
