const Sequelize = require('sequelize')

const conexao = new Sequelize('cadmensagens','root','',{
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = conexao