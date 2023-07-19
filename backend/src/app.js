const express = require("express");
const mongoose = require('mongoose');
const router = require('./controllers/router.controller')
const cors = require("cors");

const database = require('./config/db.config')

const app = express();

// mongoose.Promise = global.Promise;


// mongoose.connect('mongodb://127.0.0.1:27017/ceccaco', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// }).then(() => {
//     console.log('A Base de Dados foi conectada com sucesso!');
// }, (err) => {
//     console.log(`Erro ao conectar com a Base de Dados...: ${err}`);
//     console.log(database.local.localDatabaseUrl)
//     process.exit();
// });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: "application/vnd.api+json" }));
app.use(cors());

app.use('/',router)

module.exports = app;