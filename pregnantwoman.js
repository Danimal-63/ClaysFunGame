var woman = new Image();
woman.src = 'womenplaceholder.png'
function addWoman(x,y){
  GAME.women.push(new Woman(x,y));
}

var babyAddTimer=45;

function Woman (x,y){
  this.x=x;
  this.y=y;
}

function RenderWomen(context){
  for (var i=0;i<GAME.women.length;i++){
    context.drawImage(woman,GAME.women[i].x,GAME.women[i].y,50,50)
  }
}

function InitializeWomen(){
  var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
context.scale(1,1);
}

function handleWomenAnimation(){
  for (var i=0;i<GAME.women.length;i++){
    GAME.women[i].y+=5;
  }
}
