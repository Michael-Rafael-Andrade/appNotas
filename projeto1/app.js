import express from 'express';  //  importa o express from express

const app = new express();  // 
const porta = 3000; // porta 3000

const ola_mundo = function(req, res) {
    res.send('Olá Mundo!');
}

app.get('/', ola_mundo); // quando a constante app . get do protocolo http receber o '/' executará a função olá mundo 

app.listen(porta, () => { // app.listen = ouvir na porta 3000
    console.log("Servidor rodando no endereço http://127.0.0.1:3000\n");
})