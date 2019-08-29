const restify = require('restify');

const app = restify.createServer({ 
  name: "agenda-contato"
});

// Controllers
const AgendaController = require('./app/controllers/Agenda');

// Middlewares
app.use((req, res, next) => {
  next();
})

// Routes
app.get('/', AgendaController.list);
app.post('/', AgendaController.store);
app.put('/', AgendaController.update);
app.del('/', AgendaController.delete);

// Server
const listenPort = process.env.PORT || 3333;
app.listen(listenPort, () => console.log(`Server listening on port ${listenPort}`));