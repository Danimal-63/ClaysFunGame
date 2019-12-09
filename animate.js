/**
 *  handleBillAnimation moves the bill based on its direction and
 *    keyboard control
 *
 */

 /*
 THINGS TO DO
 - get rid of the glitch where when you have 10 beans and you double click it only does one farts
 - get the fart noise in there everytime you fart
 - get sprites instead of squares
 - create a pause button
 - create different levels
 - at the top have something which says click "k" to restart
 - also there is another weird glitch where when you win sometimes and then you hit something the "you win" screen will go away
 */
 var billPic = new Image();
 billPic.src='runningMan.png';

 var babySound = new Audio('Sounds/Farts/untitled 5.mov');
 var lossSound = new Audio('Sounds/Farts/LoserSong.m4a');
 var fartSound1 = new Audio('Sounds/Farts/fart-1.wav');
 var fartSound2 = new Audio('Sounds/Farts/fart-2.wav');
 var fartSound3 = new Audio('Sounds/Farts/fart-3.wav');
 var fartSound4 = new Audio('Sounds/Farts/fart-4.wav');
 var fartSound5 = new Audio('Sounds/Farts/fart-5.mp3');
 var fartSound6 = new Audio('Sounds/Farts/fart-6.mp3');
 var fartSound7 = new Audio('Sounds/Farts/fart-7.mp3');
 var fartSound8 = new Audio('Sounds/Farts/fart-8.wav');
 var fartSound9 = new Audio('Sounds/Farts/fart-wav-3.wav');
 var fartSound10 = new Audio('Sounds/Farts/fart-wav-4.wav');
 var winFartSound = new Audio('Sounds/Farts/winFart.m4a');



 function handleBeansAnimation (){
if(GAME.paused==false){
   if(beanAddTimer==0){
     addBean(GAME.canvas.width, Math.random()*(GAME.canvas.height -20));
     beanAddTimer=69;
   }
   beanAddTimer--;

   for (var i = 0; i<GAME.bean.length; i++){
     GAME.bean[i].x-=GAME.gameSpeed;
     if(GAME.bean[i].x< (-20)){
       GAME.bean.splice(i,1);
       i--;
     }
   }

  for (var i = 0; i<GAME.bean.length; i++){
     if(GAME.bean[i].x < (Bill.x+51) && GAME.bean[i].x > (Bill.x-20) && GAME.bean[i].y > (Bill.y -20) && GAME.bean[i].y < (Bill.y +50))
     {
       GAME.bean.splice(i,1);
       if(GAME.beanCount < 10) GAME.beanCount++;
       i--;
     }
   }
 }
}
function handleBillAnimation() {
  //let playerShotImg = new Image();
  //playerShotImg.src = 'Sounds/fartBeans.png';
  Bill.elapsed = new Date()-Bill.start;
  if (CONTROLS.bill.up) {
    Bill.y -= Bill.verticalSpeed;
  }
  if (Bill.stumble == true)
  {
    Bill.x -= 3;

  }

  if (CONTROLS.bill.down) {
    Bill.y += Bill.verticalSpeed;
  }

  if (CONTROLS.bill.fart) {
    Bill.x += 5;
  }
//  Bill.x+=Bill.speed  // Check if asteroid is leaving the boundary, if so, switch sides
  /*if (Bill.x > GAME.canvas.width) {
    Bill.x = 0;
  } else if (Bill.x < 0) {
    Bill.x = 600;
  } else if (Bill.y > GAME.canvas.height) {
    Bill.y ;
  } else if (Bill.y < 0) {
    Bill.y = 300;
  }*/
  if (CONTROLS.bill.up && (Bill.y < 0)) {

    Bill.y += 10;
  }
  if (CONTROLS.bill.down && (Bill.y > GAME.canvas.height - 50)) {
    Bill.y -= 10;
  }
}

function handleBobAnimation() {
//Bob.x+=Bob.speed;
/*  Bob.x+=Bob.speed
  Bob.y=Bill.y

  // Check if asteroid is leaving the boundary, if so, switch sides
*/
if (CONTROLS.bill.fart) {

  Bob.x -= 5;
}
Bob.x += Bob.speed;
if(Bob.y < Bill.y)
{
  Bob.y+= (Bob.speed + Bob.verticalSpeed);
}
if(Bob.y > Bill.y)
{
  Bob.y-= (Bob.speed + Bob.verticalSpeed);
}
if (Bob.x > GAME.canvas.width) {
  Bob.x = 0;
} else if (Bill.x < 0) {
  Bob.x = 600;
} else if (Bill.y > GAME.canvas.height) {
  Bob.y = 0;
} else if (Bill.y < 0) {
  Bob.y = 300;
}
}

function RenderBill(context) {
  context.fillStyle="black";
  context.drawImage(billPic,Bill.x,Bill.y,50,50);
  //context.fillRect(Bill.x,Bill.y,50,50);
  context.font = "30px Arial";
  context.fillStyle='white';
  context.fillText(Bill.elapsed/1000, 10, GAME.canvas.height-10);

}
function RenderBob(context) {
  context.fillStyle="blue";
  //context.fillRect(Bob.x,Bob.y,50,50);
  context.drawImage(billPic,Bob.x,Bob.y,50,50);
  // Draw a new item here using the canvas 'context' variable
}


function RenderWinLose(context){
  if (Bill.x < Bob.x + 50)
  {
    GAME.over=true;
    context.fillStyle="blue";
    Bob.speed=0;
    GAME.beanCount=0;

  context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);
context.fillStyle="white";
  context.font = "80px Arial";
  context.fillText("YOU LOSE!", 75, 180);
  if(GAME.lostFirst == true) lossSound.play();
  GAME.lostFirst = false;
  }
  if (Bill.x > GAME.canvas.width -50)
  {
    if(Bill.elapsed<GAME.bestScore){
      GAME.bestScore=Bill.elapsed;
    }
    // Draw a new item h
    GAME.over=true;
    context.fillStyle="black";
    Bob.speed=0;
    GAME.beanCount=0;

    context.fillRect(0,0,GAME.canvas.width,GAME.canvas.height);
    context.fillStyle="white";
  context.font = "80px Arial";
  context.fillText("YOU WIN!", 110, 180);
  context.font = "30px Arial";
  context.fillText("Low Score: " + GAME.bestScore/1000, 180, 280);
  if(GAME.wonFirst == true) winFartSound.play();
  GAME.wonFirst = false;
  /*setTimeout(function(){fartSound1.play()}, 2000);
  setTimeout(function(){fartSound2.play()}, 4000);
  setTimeout(function(){fartSound3.play()}, 6000);
  setTimeout(function(){fartSound4.play()}, 8000);
  setTimeout(function(){fartSound5.play()}, 10000);
  setTimeout(function(){fartSound6.play()}, 12000);
  setTimeout(function(){fartSound7.play()}, 14000);
  setTimeout(function(){fartSound8.play()}, 16000);
  setTimeout(function(){fartSound9.play()}, 18000);
  setTimeout(function(){fartSound10.play()}, 2000);*/

}

}

var width = cvs.getAttribute('width');
var height = cvs.getAttribute('height');

var BUTTON1 = {
  x : 1000,
  y : 1000,
  w : 600,
  h : 200,
};

var BUTTON2 = {
  x : 1000,
  y : 1500,
  w : 600,
  h : 200,
};

/**
 * Check to see if the user is hovering over or clicking on the button.
 */
 window.onmousedown = function(e) {
     x = e.pageX - canvas.getBoundingClientRect().left
     y = e.pageY - canvas.getBoundingClientRect().top

     if (x <= BUTTON1.x + BUTTON1.w || x >= BUTTON1.x - BUTTON1.w && y <= BUTTON1.y + BUTTON1.h || y >= BUTTON1.y - BUTTON1.h) {
       GAME.multiplayer = false;
       GAME.active = true;
       GAME.started = true;
     }
     else if(x <= BUTTON2.x + BUTTON2.w || x >= BUTTON2.x - BUTTON2.w && y <= BUTTON2.y + BUTTON2.h || y >= BUTTON2.y - BUTTON2.h){
       GAME.multiplayer = true;
       GAME.active = true;
       GAME.started = true;
     }
 }
function drawMenu(){
 var canvas = document.getElementById('mainCanvas');
 var context = canvas.getContext('2d');
 var bgImage = new Image(); //background
 var titleImage = new Image(); //title
 var singleplayerImage = new Image(); //singleplayer
 var multiplayerImage = new Image(); //multiplayer

 titleImage.src = "Title.png.webloc"; //image for title
 singleplayerImage.src = "singleplayerButton.png"; //image for singleplayer button
 multiplayerImage.src = "multiplayerButton.png"; //image for multiplayer button

 context.clearRect(0, 0, context.canvas.width, context.canvas.height); //clears canvas
 context.drawImage(titleImage, 50, -10); //draws title
 context.drawImage(singleplayerImage, 1000, 1000);
 context.drawImage(multiplayerImage, 1000, 1500);
}

function runGame() {

  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {
    handleRoadAnimation();
    handleBillAnimation();
    handleBobAnimation();
    handleBeansAnimation();
    handleBabysAnimation();
    animateBumParticles();


    context.clearRect(0,0,GAME.canvas.width,GAME.canvas.height);

    RenderRoad(context);
    RenderBill(context);
    RenderBob(context);
    RenderBeans(context);
    RenderBabies(context);
    RenderWinLose(context);
    RenderBumParticles(context);

  } else {
    // 1 - Reposition the objects
    window.requestAnimationFrame(drawMenu);
    // context.font = "30px Arial";
    // context.fillText("Game Over      Level " + GAME.level, 135, 200);

  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
