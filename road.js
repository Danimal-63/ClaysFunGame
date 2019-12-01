function addRoad (x,y)
{
  GAME.road.push(new Road(x,y));
}

function Road (x,y){
  this.x = x;
  this.y = y;
}

var roadAddTimer=0;

function handleRoadAnimation (){
if(GAME.paused==false){
  if(roadAddTimer==0){
    addRoad(GAME.canvas.width, (GAME.canvas.height/2)-10);
    roadAddTimer=80;
  }
  roadAddTimer--;

  for (var i = 0; i<GAME.road.length; i++){
    GAME.road[i].x-=GAME.gameSpeed;
    if(GAME.road[i].x< (-80)){
      GAME.road.splice(i,1);
      i--;}
  }
}
}


function RenderRoad(context){
  if (Bill.x < GAME.canvas.width -50 && Bill.x > Bob.x + 50)
  {
    context.fillStyle="grey";
    context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);
  }
  context.fillStyle='yellow';
  for (var i = 0; i<GAME.road.length;i++)
  {
    context.fillRect(GAME.road[i].x,GAME.road[i].y,80,20);
  }
}

function InitializeRoad() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  roadAddTimer=0;
  context.scale(1,1);

  for (var i = 0; i<GAME.road.length; i++){
       GAME.road.splice(i,1);
       i--;
   }
   addRoad(GAME.canvas.width -160, (GAME.canvas.height/2)-10);
   addRoad(GAME.canvas.width -330, (GAME.canvas.height/2)-10);
   addRoad(GAME.canvas.width -500, (GAME.canvas.height/2)-10);
   addRoad(GAME.canvas.width -670, (GAME.canvas.height/2)-10);
}
