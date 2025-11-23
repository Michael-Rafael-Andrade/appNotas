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
// body = o express encapsula todos os campos dentro do body e para acessar utilize o name do campo input do formulário.

    // cria a nota nota
    await notas.cria(chave, titulo, texto);

    //redireciona para a página principal
    res.redirect('/');
}

// cria e já exporta a função que será responsável pela consulta a nota
exports.consulta = async function(req, res){
    // informação passada como parâmetro na url
    var chave = req.params.chave_nota;
    var nota = await notas.consulta(chave);

    contexto = {
        titulo_pagina: "Consulta a Nota",
        chave: nota.chave,
        titulo: nota.titulo,
        texto: nota.texto,
    }
    // renderiza o arquivo dentro da pasta view
    res.render('consultaNota', contexto);
}

// cria e já exporta a função que será responsável pela alteração de nota
exports.altera_get = async function(req, res){
    // informação passada como parâmetro na url
    var chave = req.params.chave_nota;
    var nota = await notas.consulta(chave);

    contexto = {
        titulo_pagina: "Altera a Nota",
        chave: nota.chave,
        titulo: nota.titulo,
        texto: nota.texto,
    }

    // renderiza o arquivo dentro da pasta view
    res.render('alteraNota', contexto);
}