var man = new Image();
man.src = 'manplaceholder.png'
function addMan(x,y){
  GAME.men.push(new Man(x,y));
}

var fartTimer=60;

function Man (x,y){
  this.x=x;
  this.y=y;
  if (this.random>1){
  this.change=3;
}else{
  this.change=-3
}
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
  for (var i=0;i<GAME.men.length;i++){
  GAME.men[i].y+=GAME.men[i].change;
  if (GAME.men[i].y<0){
    GAME.men[i].y=0;
    GAME.men[i].change=GAME.men[i].change*-1;
  }
  if (GAME.men[i].y>225){
    GAME.men[i].y=225;
    GAME.men[i].change=GAME.men[i].change*-1;
  }
if ((GAME.men[i].y<=Bill.y+55 && GAME.men[i].y+55>=Bill.y)&&GAME.men[i].x-75<=Bill.x){
  for (var j =0;j < 40;j++)
  {
    Bill.bumParticles.push(new Particle(GAME.men[i].x + 10,GAME.men[i].y+20));
  }
  var num = Math.ceil(Math.random()*10);
  console.log(num);
  if (num == 1) fartSound1.play();
  else if (num == 2) fartSound2.play();
  else if (num == 3) fartSound3.play();
  else if (num == 4) fartSound4.play();
  else if (num == 5) fartSound5.play();
  else if (num == 6) fartSound6.play();
  else if (num == 7) fartSound7.play();
  else if (num == 8) fartSound8.play();
  else if (num == 9) fartSound9.play();
  else if (num == 10) fartSound10.play();
  Bill.x-=10;
  Bob.x-=8;
}
  }
}

function removeMen(){
  for (var i=0;i<GAME.men.length;i++){
    GAME.men.splice(i,1);
    i--;
  }
}
