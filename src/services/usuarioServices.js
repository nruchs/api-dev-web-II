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

    inserir: (desc_user, fone_user, cpf_user, dia_user, cnpj_UEmp) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('INSERT INTO usuarios (desc_user, fone_user, cpf_user, dia_user, cnpj_UEmp) VALUES (?, ?, ?, ?, ?)',
                [desc_user, fone_user, cpf_user, dia_user, cnpj_UEmp],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
            });
        });
    },

    alterar: (cd_user, desc_user, fone_user, cpf_user, dia_user, cnpj_UEmp) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE usuarios SET desc_user = ?, fone_user = ?, cpf_user = ?, dia_user = ?, cnpj_UEmp = ? WHERE cd_user = ?',
                [desc_user, fone_user, cpf_user, dia_user, cnpj_UEmp, cd_user],
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