const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM produtos', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (cd_prod) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM produtos WHERE cd_prod = ?', [cd_prod], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (desc_prod, qntd_prod, NCM, dia_prod, cpfCadastro) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('INSERT INTO produtos (desc_prod, qntd_prod, NCM, dia_prod, cpfCadastro) VALUES (?, ?, ?, ?, ?)',
                [desc_prod, qntd_prod, NCM, dia_prod, cpfCadastro],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
            });
        });
    },

    alterar: (cd_prod, desc_prod, qntd_prod, NCM, dia_prod, cpfCadastro) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE produtos SET desc_prod = ?, qntd_prod = ?, NCM = ?, dia_prod = ?, cpfCadastro = ? WHERE cd_prod = ?',
                [desc_prod, qntd_prod, NCM, dia_prod, cpfCadastro, cd_prod],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results);
            });
        });
    },

    excluir: (cd_prod) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM produtos WHERE cd_prod = ?',[cd_prod], 
            (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};