const express = require('express');
const cors    = require('cors');
const routes  = require("./routes");

const app     = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);


/*
    ROTA / RECURSO
    METODOS HTTP:

    GET    : buscar uma informacao no back-end
    POST   : criar uma informacao no back-end
    PUT    : alterar uma informacao no back-end
    DELETE : deletar uma informacao no backend

    TIPOS DE PARAMETROS

    Query Params: parametros nomeados enviados na rota apos  "?" (filtros, paginacao)
    Route Params: parametros utilizados para identificar recursos
    Request body: corpo da requisicao, utilizado para criar ou alterar recursos

*/



