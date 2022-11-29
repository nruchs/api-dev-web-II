const express = require('express');
const router = express.Router();


const usuarios = require('./controllers/usuarios');
const produtos = require('./controllers/produtos');
const empresas = require('./controllers/empresas');

router.get('/empresas', empresas.buscarTodos);
router.get('/empresa/:cd_emp', empresas.buscarUm);
router.post('/empresa', empresas.inserir);
router.put('/empresa/:cd_emp', empresas.alterar);
router.delete('/empresa/:cd_emp', empresas.excluir);


router.get('/produtos', produtos.buscarTodos);
router.get('/produto/:cd_prod', produtos.buscarUm);
router.post('/produto', produtos.inserir);
router.put('/produto/:cd_prod', produtos.alterar);
router.delete('/produto/:cd_prod', produtos.excluir);

router.get('/usuarios', usuarios.buscarTodos);
router.get('/usuario/:cd_user', usuarios.buscarUm);
router.post('/usuario', usuarios.inserir);
router.put('/usuario/:cd_user', usuarios.alterar);
router.delete('/usuario/:cd_user', usuarios.excluir);

router.get('/front', (req, res) => {
    return res.render('index');
})

module.exports = router;