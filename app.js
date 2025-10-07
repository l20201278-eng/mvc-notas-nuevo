const express = require('express'),
  bodyParser = require('body-parser');
const app = express();
const notesController = require('./controllers/notesController');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', notesController.index);
app.get('/notes/new', notesController.newForm);
app.post('/notes', notesController.create);

app.listen(3000, () => console.log('http://localhost:3000'));