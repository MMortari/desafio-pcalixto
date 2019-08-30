const restify = require('restify');
const corsMiddleware = require("restify-cors-middleware");  

require('./database');

const cors = corsMiddleware({  
  origins: ["*"],
  allowHeaders: ["Authorization"],
  exposeHeaders: ["Authorization"]
});

const app = restify.createServer();

app.use(restify.plugins.bodyParser());
app.pre(cors.preflight);  
app.use(cors.actual);  

/**
 * Controllers
 */
const AgendaController = require('./app/controllers/Agenda');

/**
 * Middlewares
 */
app.use((req, res, next) => {
  next();
})

/**
 * Routes
 */
// Lista todos os agendamentos
app.get('/', AgendaController.list);
// Lista um os agendamentos
app.get('/:id', AgendaController.listOne);
// Armazena um agendamento
app.post('/', AgendaController.store);
// Atualiza um agendamento
app.put('/:id', AgendaController.update);
// Apaga um agendamento
// Aparentemente o Restify não tem o método DELETE
app.post('/:id', AgendaController.delete); 

/**
 * Server
 */
const listenPort = process.env.PORT || 3333;
app.listen(listenPort, () => console.log(`Server listening on port ${listenPort}`));