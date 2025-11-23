var express = require('express');
var router = express.Router();
var controllerIndex = require('../controller/controllerIndex.js');
// var controllerNota = require('../controller/controllerNota.js');

/* GET home page. */
router.get('/', controllerIndex.tela_principal);

/* GET sobre page. */
router.get('/sobre', controllerIndex.sobre);

/* GET Consulta Nota. */
// router.get('/consulta/:chave_nota', controllerNota.consulta); // Tudo que vem depois de : são parâmetros e não parte da rota.
// Por isso que lá no controller acessa da forma:"var chave = req.params.chave_nota"

module.exports = router;
