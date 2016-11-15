const Bullet = (id) => {
	const self = {
		x:250,
		y:250,
		id:id,
		maxSpeed:2,
		timer:0,
		toRemove: false	
	}

	self.update = () => {
	    self.x += self.maxSpeed
	}
	
	return self;
}

export default Player;