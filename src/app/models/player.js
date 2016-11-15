
export const Player = (data, i) => {
  const self = PIXI.Sprite.fromImage('/img/oldman.gif');
  self.x = data[i].x;
  self.y = data[i].y;
  return self;
}

export const Bullet = (data, i) => {
  const self = PIXI.Sprite.fromImage('/img/bullet.png');
  self.x = data[i].x;
  self.y = data[i].y;
  return self;
}
