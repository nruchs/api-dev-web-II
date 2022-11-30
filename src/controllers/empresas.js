const empresaServices = require('../services/empresaServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {erros: '', result: []};

        let empresas = await empresaServices.buscarTodos();

        for(let i in empresas) {
            json.result.push({
                cd_emp: empresas[i].cd_emp,
                nome_emp: empresas[i].nome_emp,
                fone_emp: empresas[i].fone_emp,
                cnpj_emp: empresas[i].cnpj_emp
            });
        }
        res.json(json);
    },
    buscarUm: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let cd_emp = req.params.cd_emp;
        let empresa = await empresaServices.buscarUm(cd_emp);

        if(empresa) {
            json.result = empresa;
        }
        
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let nome_emp = req.body.nome_emp;
        let fone_emp = req.body.fone_emp;
        let cnpj_emp = req.body.cnpj_emp;

        if(nome_emp && fone_emp && cnpj_emp) {
            let empresaCodigo = await empresaServices.inserir(nome_emp, fone_emp, cnpj_emp);
            json.result = {
                cd_emp: empresaCodigo,
                nome_emp,
                fone_emp,
                cnpj_emp
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let cd_emp = req.params.cd_emp;
        let nome_emp = req.body.nome_emp;
        let fone_emp = req.body.fone_emp;
        let cnpj_emp = req.body.cnpj_emp;

        if(cd_emp && nome_emp && fone_emp && cnpj_emp) {
            await empresaServices.alterar(cd_emp, nome_emp, fone_emp, cnpj_emp);
            json.result = {
                cd_emp,
                nome_emp,
                fone_emp,
                cnpj_emp
            };
        } else {
            json.error = 'Campos não enviados';
        }
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {erros: '', result: {}};

        await empresaServices.excluir(req.params.cd_emp);

        res.json(json);
    }
}