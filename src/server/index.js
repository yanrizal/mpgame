import express from 'express';
import path from 'path';
import routes from './routes/main.routes';
import morgan from 'morgan';
import dotenv from 'dotenv';

dotenv.load();
const app = express();

app.use(morgan('dev'));
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'hjs');
app.use('/', routes);
app.use(express.static(path.join(__dirname, '../app/static')));
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


