var jellyBeanPic = new Image();
jellyBeanPic.src='Sounds/jellyBean.png';

function addJellyBean (x,y)
{
  GAME.jellyBean.push(new JellyBean(x,y));
}

function JellyBean (x,y){
  this.x = x;
  this.y = y;
}

jellyBeanAddTimer = 30;


function RenderJellyBeans(context){
  if(GAME.over==true)return;
  else{
    context.fillStyle='purple';
    for (var i = 0; i<GAME.jellyBean.length;i++)
    {
      //context.fillRect(GAME.bean[i].x,GAME.bean[i].y,20,20);
      context.drawImage(jellyBeanPic,GAME.jellyBean[i].x,GAME.jellyBean[i].y,20,20);
    }

     context.font = "30px Arial";
     if (GAME.jellyBeanCount < 4) context.fillStyle='red';
     else context.fillStyle='blue';
     if (GAME.jellyBeanCount <10)
     context.fillText(GAME.jellyBeanCount, GAME.canvas.width -50, GAME.canvas.height-10);
     else
     context.fillText(GAME.jellyBeanCount, GAME.canvas.width -70, GAME.canvas.height-10);
  }
}

function InitializeJellyBeans(){
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);

  for (var i = 0; i<GAME.jellyBean.length; i++){
       GAME.jellyBean.splice(i,1);
       i--;

   }
   GAME.jellyBeanCount = 0;
}
