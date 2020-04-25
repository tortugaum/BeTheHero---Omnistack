const express = require('express');
const corts = require('cors');
const routes = require('./routes');


const app = express();


//Converter json em objeto js json
app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota/ Recurso
 */

 /***
  * Métodos HttP:
  * 
  * GET: Buscar informação no back-end
  * POST: Criar uma informação no back-end
  * PUT: Alterar informação no back-end
  * DELETE: Deletar uma informação no back-end
  */
 /***
  * Tipos de parâmetros:
  * 
  * Query: Parametros nomeados enviados na rota após ? que geralmente servem para (filtro, paginacao)
  * Route: Parâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /***
   * NoSql: MongoDB, CouchDB, etc
   */

   /***
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */


app.listen(3333);