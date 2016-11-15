const Player = (id) => {
	const self = {
		x:250,
		y:250,
		id:id,
		right:false,
		left:false,
		up:false,
		down:false,
		maxSpeed:1	
	}

	self.updatePosition = () => {
	   if(self.right){
	     self.x += self.maxSpeed
	   }
	   if(self.left){
	     self.x -= self.maxSpeed
	   }
	   if(self.up){
	     self.y -= self.maxSpeed
	   }
	   if(self.down){
	     self.y += self.maxSpeed
	   }
	}

	self.onConnect = (socket) => {
	  socket.on('client:keyPress', (data) => {
		  switch(data.inputId){
		  	case 'left':
		  	  self.left = data.state
		  	  break;
		  	case 'right':
		  	  self.right = data.state
		  	  break;
		  	case 'up':
		  	  self.up = data.state
		  	  break;
		  	case 'down':
		  	  self.down = data.state
		  	  break;
		  }
	  });
	}
	
	return self;
}

export default Player;