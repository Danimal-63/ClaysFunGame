var man = new Image();
man.src = 'manplaceholder.png'
function addMan(x,y){
  GAME.men.push(new Man(x,y));
}

var fartTimer=60;

function Man (x,y){
  this.x=x;
  this.y=y;
  this.fartTimer=45
}

function RenderMen(context){
  if (!GAME.over){
  for (var i=0;i<GAME.men.length;i++){
    context.drawImage(man,GAME.men[i].x,GAME.men[i].y,75,75)
  }
}
}

function InitializeMen(){
  var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
context.scale(1,1);
}

function handleMenAnimation(){
  var change=3;
  for (var i=0;i<GAME.men.length;i++){
    if ((Math.random()*2)>1){
      change=-3;
  }
  GAME.men[i].y+=change;
  if (GAME.men[i].y<0){
    GAME.men[i].y=0;
  }
  if (GAME.men[i].y>225){
    GAME.men[i].y=225;
  }
GAME.men[i].fartTimer--;
if (GAME.men[i].fartTimer==0){
  addBaby(GAME.men[i].x,GAME.men[i].y);
  GAME.men[i].fartTimer=fartTimer;
}
  }
}

function removeMen(){
  for (var i=0;i<GAME.men.length;i++){
    GAME.men.splice(i,1);
  }
}
