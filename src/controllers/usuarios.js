const usuarioServices = require('../services/usuarioServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {erros: '', result: []};

        let usuarios = await usuarioServices.buscarTodos();

        for(let i in usuarios) {
            json.result.push({
                cd_user: usuarios[i].cd_user,
                desc_user: usuarios[i].desc_user,
                fone_user: usuarios[i].fone_user,
                cpf_user: usuarios[i].cpf_user,
                dia_user: usuarios[i].dia_user,
                cnpj_UEmp: usuarios[i].cnpj_UEmp
            });
        }
        res.json(json);
    },
    
    buscarUm: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let cd_user = req.params.cd_user;
        let usuario = await usuarioServices.buscarUm(cd_user);

        if(usuario) {
            json.result = usuario;
        }
        
        res.json(json);
    },

    inserir: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let desc_user = req.body.desc_user;
        let fone_user = req.body.fone_user;
        let cpf_user = req.body.cpf_user;
        let dia_user = req.body.dia_user;
        let cnpj_UEmp = req.body.cnpj_UEmp;


        if(desc_user && fone_user && cpf_user && dia_user && cnpj_UEmp) {
            let userCodigo = await usuarioServices.inserir(desc_user, fone_user, cpf_user, dia_user, cnpj_UEmp);
            json.result = {
                cd_prod: userCodigo,
                desc_user,
                fone_user,
                cpf_user,
                dia_user,
                cnpj_UEmp
            };

        } else {
            json.error = 'Campos não enviados';
        }
        
        res.json(json);
    },
    
    alterar: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let cd_user = req.params.cd_user;
        let desc_user = req.body.desc_user;
        let fone_user = req.body.fone_user;
        let cpf_user = req.body.cpf_user;
        let dia_user = req.body.dia_user;
        let cnpj_UEmp = req.body.cnpj_UEmp;


        if(cd_user && desc_user && fone_user && cpf_user && dia_user && cnpj_UEmp) {
            await usuarioServices.alterar(cd_user, desc_user, fone_user, cpf_user, dia_user, cnpj_UEmp);
            json.result = {
                cd_user,
                desc_user,
                fone_user,
                cpf_user,
                dia_user,
                cnpj_UEmp
            };

        } else {
            json.error = 'Campos não enviados';
        }
        
        res.json(json);
    },

    excluir: async(req, res) => {
        let json = {erros: '', result: {}};

        await usuarioServices.excluir(req.params.cd_user);

        res.json(json);
    }
}
