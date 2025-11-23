// importação da classe que gerencia as notas na memória
const notas = require('../model/notaMemoria.js');

// cria e já exporta a função que será responsável pela criação de nota
exports.cria_get = async function(req, res){
    contexto = {
        titulo_pagina: "Criação de Nota",
    }

    // renderiza o arquivo dentro da pasta view
    res.render('criaNota', contexto);
}

// cria e já exporta a função que será responsável pela criação de nota
exports.cria_post = async function(req, res){
    // obtém as informações do formulário
    var chave = req.body.chave; // req.body.(name do formulario); = captura os dados digitados no campo input name=chave;
    var titulo = req.body.titulo;
    var texto = req.body.texto;

    // cria a nota nota
    await notas.cria(chave, titulo, texto);

    //redireciona para a página principal
    res.redirect('/');
}