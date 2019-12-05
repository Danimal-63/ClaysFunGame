var tacoPic = new Image();
tacoPic.src='Sounds/taco.png';

function addTaco (x,y)
{
  GAME.taco.push(new Taco(x,y));
}

function Taco (x,y){
  this.x = x;
  this.y = y;
}
