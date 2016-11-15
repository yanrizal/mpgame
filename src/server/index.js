import express from 'express';
import path from 'path';
import routes from './routes/main.routes';
import morgan from 'morgan';
import dotenv from 'dotenv';
import Player from './models/player';

dotenv.load();
const app = express();
const http = require('http').Server(app);

//app.use(morgan('dev'));
app.set('views', path.join(__dirname, '../app/views'));
app.set('view engine', 'hjs');
app.use('/', routes);

let SOCKET_LIST = {};
let players = [];

const io = require('socket.io')(http);
io.on('connection', (socket) => {
  console.log('socket connection');
  socket.id = Math.random();
  SOCKET_LIST[socket.id] = socket

  const player = Player(socket.id);
  player.onConnect(socket);
  players.push(player);

  socket.on('disconnect', () => {
  	var index = players.map((e) => { 
  		return e.id; 
  	}).indexOf(socket.id);
  	players.splice(index, 1);

  	for (var i in SOCKET_LIST) {
	   var socket2 = SOCKET_LIST[i];
	   socket2.emit('server:disconnect',{
		  	index:index
		})
	}
  	
  	delete SOCKET_LIST[socket.id];
  })

});

setInterval(() => {
	var pack = [];
	players.map((player) => {
	  player.updatePosition()
	  pack.push({
	   	x:player.x,
	   	y:player.y
	   })
	})
	for (var i in SOCKET_LIST) {
	   var socket = SOCKET_LIST[i];
	   socket.emit('server:newPos',pack)
	}

},100)

app.use(express.static(path.join(__dirname, '../app/static')));
app.set('port', (process.env.PORT || 3000));

http.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


