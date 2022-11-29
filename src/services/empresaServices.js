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

    inserir: (desc_emp, fone_emp, cnpj_emp, dia_emp) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('INSERT INTO empresas (desc_emp, fone_emp, cnpj_emp, dia_emp) values (?, ?, ?, ?)',
                [desc_emp, fone_emp, cnpj_emp, dia_emp],
                (error, results) => {
                    if(error) { rejeitado(error); return; }
                    aceito(results.insertCodigo);

            });
        });
    },

    alterar: (cd_emp, desc_emp, fone_emp, cnpj_emp, dia_emp) => {
        return new Promise((aceito, rejeitado) => {
            
            db.query('UPDATE empresas SET desc_emp = ?, fone_emp = ?, cnpj_emp = ?, dia_emp = ? WHERE cd_emp = ?',
                [desc_emp, fone_emp, cnpj_emp, dia_emp, cd_emp],
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