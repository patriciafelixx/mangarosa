const { Model, DataTypes } = require('sequelize');

class User extends Model {
    static init(connection) {
        super.init({
            name: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: 'Esse campo não pode ser vazio'
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: {
                        msg: 'Digite um e-mail válido'
                    }
                }
            },
            cpf: {
                type: DataTypes.STRING,
                validate: {
                    is: {
                        args: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
                        msg: 'Digite o cpf no formato 000.000.000-00'
                    },                    
                },             
            },
            phone: {
                type: DataTypes.STRING,
                validate: {
                    is: {
                        args: /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/,
                        msg: 'Digite um número de celular válido'
                    }
                }
            },
            skills: {
                type: DataTypes.STRING,
                validate: {
                    notEmpty: {
                        msg: 'Escolha de 1 à 3 tecnologias'
                    }
                }
            },
            active: DataTypes.BOOLEAN,
            slug: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }
}

module.exports = User;