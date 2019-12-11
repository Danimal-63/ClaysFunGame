var image = new Image();
image.src='Sounds/poopBeans.png';
function addBean (x,y)
{
  GAME.bean.push(new Bean(x,y));
}

function Bean (x,y){
  this.x = x;
  this.y = y;
}

var beanAddTimer=69;

function RenderBeans(context){

if(GAME.over==true)return;
else{
  context.fillStyle='brown';
  for (var i = 0; i<GAME.bean.length;i++)
  {
    //context.fillRect(GAME.bean[i].x,GAME.bean[i].y,20,20);
    context.drawImage(image,GAME.bean[i].x,GAME.bean[i].y,20,20);
  }

   context.font = "30px Arial";
   if (GAME.beanCount < 5) context.fillStyle='red';
   else context.fillStyle='green';
   if (GAME.beanCount !=10)
   context.fillText(GAME.beanCount, GAME.canvas.width -25, GAME.canvas.height-10);
   else
   context.fillText(GAME.beanCount, GAME.canvas.width -39, GAME.canvas.height-10);
}
}

function InitializeBeans() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  for (var i = 0; i<GAME.bean.length; i++){
       GAME.bean.splice(i,1);
       i--;
   }
   GAME.beanCount = 0;

}
function removeBeans(){
  for (var i = 0; i<GAME.bean.length; i++){
       GAME.bean.splice(i,1);
}
}
