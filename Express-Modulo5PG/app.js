app.get('/', function (req,res){
    res.res('Olá mundo!')
});


app.get('/contatos', (req,res) =>res.send(['Contato1','Contato2']) );

//criando um servidor
app.listen(3000, () =>console.log("Servidor rodando na porta 3000"))