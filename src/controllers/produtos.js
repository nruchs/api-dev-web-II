const produtoServices = require('../services/produtoServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {erros: '', result: []};

        let produtos = await produtoServices.buscarTodos();

        for(let i in produtos) {
            json.result.push({
                cd_prod: produtos[i].cd_prod,
                nome_prod: produtos[i].nome_prod,
                qntd_prod: produtos[i].qntd_prod,
                cat_prod: produtos[i].cat_prod,
                val_prod: produtos[i].val_prod,
            });
        }
        res.json(json);
    },

    buscarUm: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let cd_prod = req.params.cd_prod;
        let produto = await produtoServices.buscarUm(cd_prod);

        if(produto) {
            json.result = produto;
        }
        
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let nome_prod = req.body.nome_prod;
        let qntd_prod = req.body.qntd_prod;
        let cat_prod = req.body.cat_prod;
        let val_prod = req.body.val_prod;


        if(nome_prod && qntd_prod && cat_prod && val_prod) {
            let produtoCodigo = await produtoServices.inserir(nome_prod, qntd_prod, cat_prod, val_prod);
            json.result = {
                cd_prod: produtoCodigo,
                nome_prod,
                qntd_prod,
                cat_prod,
                val_prod
            };

        } else {
            json.error = 'Campos não enviados';
        }
        
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let cd_prod = req.params.cd_prod;
        let nome_prod = req.body.nome_prod;
        let qntd_prod = req.body.qntd_prod;
        let cat_prod = req.body.cat_prod;
        let val_prod = req.body.val_prod;


        if(cd_prod && nome_prod && qntd_prod && cat_prod && val_prod) {
            await produtoServices.alterar(cd_prod, nome_prod, qntd_prod, cat_prod, val_prod);
            json.result = {
                cd_prod,
                nome_prod,
                qntd_prod,
                cat_prod,
                val_prod
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {erros: '', result: {}};

        await produtoServices.excluir(req.params.cd_prod);

        res.json(json);
    }

}