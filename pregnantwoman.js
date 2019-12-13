var woman = new Image();
woman.src = 'womenplaceholder.png'
function addWoman(x,y){
  GAME.women.push(new Woman(x,y));
}

var babyAddTimer=60;

function Woman (x,y){
  this.x=x;
  this.y=y;
  this.babyTimer=(Math.random()*45)+1;
  this.random=(Math.random()*2)
  if (this.random>1){
  this.change=3;
}else{
  this.change=-3
}
}

function RenderWomen(context){
  if (!GAME.over){
  for (var i=0;i<GAME.women.length;i++){
    context.drawImage(woman,GAME.women[i].x,GAME.women[i].y,75,75)
  }
}
}

function InitializeWomen(){
  var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
context.scale(1,1);
}

function handleWomenAnimation(){
  for (var i=0;i<GAME.women.length;i++){
  GAME.women[i].y+=GAME.women[i].change;
  if (GAME.women[i].y<0){
    GAME.women[i].y=0;
    GAME.women[i].change=GAME.women[i].change*-1;
  }
  if (GAME.women[i].y>225){
    GAME.women[i].y=225;
    GAME.women[i].change=GAME.women[i].change*-1;
  }
if (GAME.women[i].babyTimer<=0){
  addBaby(GAME.women[i].x,GAME.women[i].y);
  GAME.women[i].babyTimer=babyAddTimer;
}
GAME.women[i].babyTimer--;
  }
}

function removeWomen(){
  for (var i=0;i<GAME.women.length;i++){
    GAME.women.splice(i,1);
    i--;
  }
}
