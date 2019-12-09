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

tacoAddTimer = 30;

/*function handleTacosAnimation(){

}*/

function RenderTacos(context){
  context.fillStyle='yellow';
  for (var i = 0; i<GAME.taco.length;i++)
  {
    context.fillStyle='yellow';
    context.drawImage(tacoPic,GAME.taco[i].x,GAME.taco[i].y,20,20);
  }
}

function InitializeTacos(){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  for (var i = 0; i<GAME.taco.length; i++){
       GAME.taco.splice(i,1);
       i--;

   }
}
