import io from 'socket.io-client';
import './controllers/keyboard';
import { socket } from './controllers/keyboard';
import { Player } from './models/player';

var renderer = PIXI.autoDetectRenderer(800, 600,{backgroundColor : 0x1099bb});
document.body.appendChild(renderer.view);
const stage = new PIXI.Container();
const container = new PIXI.Container();
const players = [];
stage.addChild(container);

socket.on('server:newPos', (data) => {
	for (let i = data.length - 1; i >= 0; i--) {
		const isExist = i in players;
		if(!isExist){
		  const player = Player(data,i);
		  players.push(player);
		  container.addChild(player);
		}else{
		  players[i].x = data[i].x;
		  players[i].y = data[i].y;
		}	
	}
});

socket.on('server:disconnect', (data) => {
	players.splice(data.index, 1);
	container.removeChild(container.children[data.index])
})

// renderer.on('click',function(mouseData){
//   console.log(mouseData)
// });


// start animating
animate();

function animate() {
    requestAnimationFrame(animate);
    renderer.render(stage);
}
