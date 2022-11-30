const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM usuarios', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (cd_user) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM usuarios WHERE cd_user = ?', [cd_user], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome_user, fone_user, cpf_user, uf_user) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('INSERT INTO usuarios (nome_user, fone_user, cpf_user, uf_user) VALUES (?, ?, ?, ?)',
                [nome_user, fone_user, cpf_user, uf_user],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
            });
        });
    },

    alterar: (cd_user, nome_user, fone_user, cpf_user, uf_user) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE usuarios SET nome_user = ?, fone_user = ?, cpf_user = ?, uf_user = ? WHERE cd_user = ?',
                [nome_user, fone_user, cpf_user, uf_user, cd_user],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
            });
        });
    }, 

    excluir: (cd_user) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM usuarios WHERE cd_user = ?',[cd_user], 
            (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};