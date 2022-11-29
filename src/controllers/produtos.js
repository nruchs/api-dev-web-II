const produtoServices = require('../services/produtoServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {erros: '', result: []};

        let produtos = await produtoServices.buscarTodos();

        for(let i in produtos) {
            json.result.push({
                cd_prod: produtos[i].cd_prod,
                desc_prod: produtos[i].desc_prod,
                NCM: produtos[i].NCM,
                dia_prod: produtos[i].dia_prod,
                cpfCadastro: produtos[i].cpfCadastro,
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
        
        let desc_prod = req.body.desc_prod;
        let qntd_prod = req.body.qntd_prod;
        let NCM = req.body.NCM;
        let dia_prod = req.body.dia_prod;
        let cpfCadastro = req.body.cpfCadastro;


        if(desc_prod && qntd_prod && NCM && dia_prod && cpfCadastro) {
            let produtoCodigo = await produtoServices.inserir(desc_prod, qntd_prod, NCM, dia_prod, cpfCadastro);
            json.result = {
                cd_prod: produtoCodigo,
                desc_prod,
                qntd_prod,
                NCM,
                dia_prod,
                cpfCadastro
            };

        } else {
            json.error = 'Campos não enviados';
        }
        
        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let cd_prod = req.params.cd_prod;
        let desc_prod = req.body.desc_prod;
        let qntd_prod = req.body.qntd_prod;
        let NCM = req.body.NCM;
        let dia_prod = req.body.dia_prod;
        let cpfCadastro = req.body.cpfCadastro;


        if(cd_prod && desc_prod && qntd_prod & NCM && dia_prod && cpfCadastro) {
            await produtoServices.alterar(cd_prod, desc_prod, qntd_prod, NCM, dia_prod, cpfCadastro);
            json.result = {
                cd_prod,
                desc_prod,
                qntd_prod,
                NCM,
                dia_prod,
                cpfCadastro
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