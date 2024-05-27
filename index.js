const express = require("express");
const app = express();
const conexao = require('./database/basedados');
const Mensagem = require('./database/Mensagem');
const bodyParser = require('body-parser');

conexao.authenticate().then(() => {
    console.log("BANCO CONECTADO COM SUCESSO");
}).catch((msgErro) => {
    console.log(msgErro);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render('index');
});

app.get("/cadmensagem", (req, res) => {
    res.render('mensagens/cadastrar');
});

app.post("/salvarmensagem", (req, res) => {
    var nome = req.body.nome;
    var email = req.body.email;
    var mensagem = req.body.mensagem;
    Mensagem.create({
        nome: nome,
        email: email,
        mensagem: mensagem
    }).then(() => {
        res.redirect("/");
    });
});

app.listen(3000, () => {
    console.log("SERVIDOR RODANDO");
});
