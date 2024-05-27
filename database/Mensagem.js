const Sequelize = require('sequelize');
const conexao = require('./basedados')
const Mensagem = conexao.define('mensagem',{
    id_mensagem:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    mensagem:{
        type:Sequelize.TEXT,
        allowNull:false
    }
})
Mensagem.sync();
module.exports = Mensagem