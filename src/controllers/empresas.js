const empresaServices = require('../services/empresaServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {erros: '', result: []};

        let empresas = await empresaServices.buscarTodos();

        for(let i in empresas) {
            json.result.push({
                cd_emp: empresas[i].cd_emp,
                desc_emp: empresas[i].desc_emp,
                fone_emp: empresas[i].fone_emp,
                cnpj_emp: empresas[i].cnpj_emp,
                dia_emp: empresas[i].dia_emp
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
        
        let desc_emp = req.body.desc_emp;
        let fone_emp = req.body.fone_emp;
        let cnpj_emp = req.body.cnpj_emp;
        let dia_emp = req.body.dia_emp;


        if(desc_emp && fone_emp && cnpj_emp && dia_emp) {
            let empresaCodigo = await empresaServices.inserir(desc_emp, fone_emp, cnpj_emp, dia_emp);
            json.result = {
                cd_emp: empresaCodigo,
                desc_emp,
                fone_emp,
                cnpj_emp,
                dia_emp
            };
        } else {
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let cd_emp = req.params.cd_emp;
        let desc_emp = req.body.desc_emp;
        let fone_emp = req.body.fone_emp;
        let cnpj_emp = req.body.cnpj_emp;
        let dia_emp = req.body.dia_emp;


        if(cd_emp && desc_emp && fone_emp && cnpj_emp && dia_emp) {
            await empresaServices.alterar(cd_emp, desc_emp, fone_emp, cnpj_emp, dia_emp);
            json.result = {
                cd_emp,
                desc_emp,
                fone_emp,
                cnpj_emp,
                dia_emp
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