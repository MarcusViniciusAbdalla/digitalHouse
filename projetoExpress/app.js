const express = require("express");

let app = express();

app.get('/', (req , res)=> res.send('Olá Mundo'))

    app.listen(8000, () =>{
        console.log("Levantando um servidor com Express")
    })
