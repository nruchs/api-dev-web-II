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

    inserir: (nome_prod, qntd_prod, cat_prod, val_prod) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('INSERT INTO produtos (nome_prod, qntd_prod, cat_prod, val_prod) VALUES (?, ?, ?, ?)',
                [nome_prod, qntd_prod, cat_prod, val_prod],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);
            });
        });
    },

    alterar: (cd_prod, nome_prod, qntd_prod, cat_prod, val_prod) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE produtos SET nome_prod = ?, qntd_prod = ?, cat_prod = ?, val_prod = ? WHERE cd_prod = ?',
                [nome_prod, qntd_prod, cat_prod, val_prod, cd_prod],
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