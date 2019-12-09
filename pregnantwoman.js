var woman = new Image();
woman.src = 'womenplaceholder.png'
function addWoman(x,y){
  GAME.women.push(new Woman(x,y));
}

var babyAddTimer=45;

function Woman (x,y){
  this.x=x;
  this.y=y;
  this.babyTimer=45
}

function RenderWomen(context){
  for (var i=0;i<GAME.women.length;i++){
    context.drawImage(woman,GAME.women[i].x,GAME.women[i].y,75,75)
  }
}

function InitializeWomen(){
  var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
context.scale(1,1);
}

function handleWomenAnimation(){
  var change=3;
  for (var i=0;i<GAME.women.length;i++){
    if ((Math.random()*2)>1){
      change=-3;
  }
  GAME.women[i].y+=change;
  if (GAME.women[i].y<0){
    GAME.women[i].y=0;
  }
  if (GAME.women[i].y>250){
    GAME.women[i].y=250;
  }
GAME.women[i].babyTimer--;
if (GAME.women[i].babyTimer==0){
  addBaby(GAME.women[i].x,GAME.women[i].y);
  GAME.women[i].babyTimer=babyAddTimer;
}
  }
}
