var babyPic = new Image();
babyPic.src='Sounds/Baby.png';



function addBaby (x,y)
{
  GAME.baby.push(new Baby(x,y));
}

function Baby (x,y){
  this.x = x;
  this.y = y;
}

var babyAddTimer=45;

function handleBabysAnimation (){
if (GAME.paused==false){
  if(GAME.over==true){
    for (var i = 0; i<GAME.baby.length; i++){
        GAME.baby.splice(i,1);
      }
    }

  else{

  if(babyAddTimer==0){
    addBaby(GAME.canvas.width, Math.random()*(GAME.canvas.height -20));
    babyAddTimer=45;
  }
  babyAddTimer--;

  for (var i = 0; i<GAME.baby.length; i++){
    GAME.baby[i].x-=GAME.gameSpeed;
    if(GAME.baby[i].x< (-20)){
      GAME.baby.splice(i,1);
      i--;
    }
  }

 for (var i = 0; i<GAME.baby.length; i++){
    if(GAME.baby[i].x < (Bill.x+51) && GAME.baby[i].x > (Bill.x-20) && GAME.baby[i].y > (Bill.y -20) && GAME.baby[i].y < (Bill.y +50))
    {
      GAME.baby.splice(i,1);
      Bill.stumble=true;
      babySound.play();

      setTimeout(function(){Bill.stumble = false;}, 150);
      i--;
    }
  }
}
}
}

function RenderBabies(context){
  context.fillStyle='blue';
  for (var i = 0; i<GAME.baby.length;i++)
  {
    context.fillStyle='blue';
    //context.fillRect(GAME.baby[i].x,GAME.baby[i].y,20,20);
    context.drawImage(babyPic,GAME.baby[i].x,GAME.baby[i].y,20,20);
  }
}

function InitializeBabies() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  for (var i = 0; i<GAME.baby.length; i++){
       GAME.baby.splice(i,1);
       i--;

   }
}
