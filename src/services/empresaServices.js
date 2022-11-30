const db = require('../db');

module.exports = {
    buscarTodos: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM empresas', (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    },

    buscarUm: (cd_emp) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('SELECT * FROM empresas WHERE cd_emp = ?', [cd_emp], (error, results) => {
                if(error) { rejeitado(error); return; }
                if(results.length > 0) {
                    aceito(results[0]);
                } else {
                    aceito(false);
                }
            });
        });
    },

    inserir: (nome_emp, fone_emp, cnpj_emp) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('INSERT INTO empresas (nome_emp, fone_emp, cnpj_emp) values (?, ?, ?)',
                [nome_emp, fone_emp, cnpj_emp],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);

            });
        });
    },

    alterar: (cd_emp, nome_emp, fone_emp, cnpj_emp) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE empresas SET nome_emp = ?, fone_emp = ?, cnpj_emp = ? WHERE cd_emp = ?',
                [nome_emp, fone_emp, cnpj_emp, cd_emp],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results);
            });
        });
    },

    excluir: (cd_emp) => {
        return new Promise((aceito, rejeitado) => {
            db.query('DELETE FROM empresas WHERE cd_emp = ?',[cd_emp], 
            (error, results) => {
                if(error) { rejeitado(error); return; }
                aceito(results);
            });
        });
    }
};