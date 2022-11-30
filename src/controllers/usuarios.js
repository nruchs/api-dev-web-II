const usuarioServices = require('../services/usuarioServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {erros: '', result: []};

        let usuarios = await usuarioServices.buscarTodos();

        for(let i in usuarios) {
            json.result.push({
                cd_user: usuarios[i].cd_user,
                nome_user: usuarios[i].nome_user,
                fone_user: usuarios[i].fone_user,
                cpf_user: usuarios[i].cpf_user,
                uf_user: usuarios[i].uf_user
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
        
        let nome_user = req.body.nome_user;
        let fone_user = req.body.fone_user;
        let cpf_user = req.body.cpf_user;
        let uf_user = req.body.uf_user;


        if(nome_user && fone_user && cpf_user && uf_user) {
            let userCodigo = await usuarioServices.inserir(nome_user, fone_user, cpf_user, uf_user);
            json.result = {
                cd_prod: userCodigo,
                nome_user,
                fone_user,
                cpf_user,
                uf_user
            };

        } else {
            json.error = 'Campos não enviados';
        }
        
        res.json(json);
    },
    
    alterar: async(req, res) => {
        let json = {erros: '', result: {}};
        
        let cd_user = req.params.cd_user;
        let nome_user = req.body.nome_user;
        let fone_user = req.body.fone_user;
        let cpf_user = req.body.cpf_user;
        let uf_user = req.body.uf_user;


        if(cd_user && nome_user && fone_user && cpf_user && uf_user) {
            await usuarioServices.alterar(cd_user, nome_user, fone_user, cpf_user, uf_user);
            json.result = {
                cd_user,
                nome_user,
                fone_user,
                cpf_user,
                uf_user
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
