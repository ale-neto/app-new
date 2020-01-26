const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const app = express();
mongoose.connect('mongodb://admin:admin@cluster0-shard-00-00-ukhrv.mongodb.net:27017,cluster0-shard-00-01-ukhrv.mongodb.net:27017,cluster0-shard-00-02-ukhrv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority'
,{
  useNewUrlParser: true,
  useUnifiedTopology: true,  
});

app.use(express.json());
app.use(routes);
app.listen(3333); 


// Metodos HTTP: GET. POST, PUT , DELETE

// Tipos de parâmetros;
// Query Params: request.query (Filtros, ordenação, paginação,...)
// Route Params: request.params (Identificar um recurso na alteração ou remoção)
//Body: request.body (Dados para criação ou alteração de um resgistro )

// MongoDB(Não-relacional    )