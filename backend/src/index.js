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
const ContactsController = require('./app/controllers/Contacts');

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
app.get('/', ContactsController.list);
// Lista um os agendamentos
app.get('/:id', ContactsController.listOne);
// Armazena um agendamento
app.post('/', ContactsController.store);
// Atualiza um agendamento
app.put('/:id', ContactsController.update);
// Apaga um agendamento
// Aparentemente o Restify não tem o método DELETE
app.post('/:id', ContactsController.delete); 

/**
 * Server
 */
const listenPort = process.env.PORT || 3333;
app.listen(listenPort, () => console.log(`Server listening on port ${listenPort}`));