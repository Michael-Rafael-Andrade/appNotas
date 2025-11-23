// importação da classe que gerencia as notas na memória
const notas = require('../model/notaMemoria.js');

// cria e já exporta a função que será responsável pela tela principal
exports.tela_principal = async function(req, res){
    // nota criada para teste
    await notas.cria('nota_1', "Olá Mundo, Notas", "Esta é uma nota para testar as funcionalidades da aplicação de notas.");

    contexto = {
        titulo_pagina: "Gerenciador de Notas de Texto",
        notas: await notas.lista(),
    }

    // renderiza o arquivo inde.hbs, dentro da pasta view
    res.render('index', contexto);
}

exports.sobre = async function(req, res){
    contexto = {
        titulo_pagina: "Sobre o Aplicativo",
    }

    // renderiza o arquivo dentro da pasta View
    res.render('sobre', contexto);
}