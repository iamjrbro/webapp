const express = require ('express');

const app = express();

app.get ('/', req, res) => {
    res.send ('Olá! Bem vindo(a) ao meu webapp, implantado no Azure e utilizando Node.js')
};

const port = process.env.PORT || 3000;

app.listen(port, () =>){
    console.log('Servidor rodando em {port https://testewapp.azurewebsites.net/}')
};
