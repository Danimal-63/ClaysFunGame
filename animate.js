/**
 *  handleBillAnimation moves the bill based on its direction and
 *    keyboard control
 *
 */
function handleBillAnimation() {
  if (CONTROLS.bill.up) {
    Bill.y -= Bill.speed;
  }
  if (CONTROLS.bill.down) {
    Bill.y += Bill.speed;
  }

  Bill.x+=Bill.speed  // Check if asteroid is leaving the boundary, if so, switch sides
  else if (Bill.x > GAME.canvas.width) {
    Bill.x = 0;
  } else if (Bill.x < 0) {
    Bill.x = 600;
  } else if (Bill.y > GAME.canvas.height) {
    Bill.y = 0;
  } else if (Bill.y < 0) {
    Bill.y = 300;
  }
}

function handleBobAnimation() {
  Bob.x+=Bob.speed
  Bob.y=Bill.y

  // Check if asteroid is leaving the boundary, if so, switch sides

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
function handleBeansAnimation() {
  Beans.x-=Beans.speed
  Beans.y=Beans.y
  // Check if asteroid is leaving the boundary, if so, switch sides
if (Bill.x <0) {
  InitializeBeans();
  RenderBeans(context);
}
}
function RenderBill(context) {
  context.fillRect(Bill.x,Bill.y,50,50);
  // Draw a new item here using the canvas 'context' variable
}
function RenderBob(context) {
  context.fillRect(Bob.x,Bob.y,50,50);
  // Draw a new item here using the canvas 'context' variable
}
function RenderBeans(context) {
  context.fillRect(Beans.x,Beans.y,50,50);
  // Draw a new item here using the canvas 'context' variable
}

<<<<<<< HEAD
// var width = cvs.getAttribute('width');
// var height = cvs.getAttribute('height');
//
// var BUTTON1 = {
//   x : 1000,
//   y : 1000,
//   w : 600,
//   h : 200,
// };
//
// var BUTTON2 = {
//   x : 1000,
//   y : 1500,
//   w : 600,
//   h : 200,
// };
//
// /**
//  * Check to see if the user is hovering over or clicking on the button.
//  */
//  window.onmousedown = function(e) {
//      x = e.pageX - cvs.getBoundingClientRect().left
//      y = e.pageY - cvs.getBoundingClientRect().top
//
//      if (x <= BUTTON1.x + BUTTON1.w || x >= BUTTON1.x - BUTTON1.w && y <= BUTTON1.y + BUTTON1.h || y >= BUTTON1.y - BUTTON1.h) {
//        GAME.multiplayer = false;
//        GAME.active = true;
//        GAME.started = true;
//      }
//      else if(x <= BUTTON2.x + BUTTON2.w || x >= BUTTON2.x - BUTTON2.w && y <= BUTTON2.y + BUTTON2.h || y >= BUTTON2.y - BUTTON2.h){
//        GAME.multiplayer = true;
//        GAME.active = true;
//        GAME.started = true;
//      }
//  }
// function drawMenu(){
//  var canvas = document.getElementById('mainCanvas');
//  var context = canvas.getContext('2d');
//  var bgImage = new Image(); //background
//  var titleImage = new Image(); //title
//  var singleplayerImage = new Image(); //singleplayer
//  var multiplayerImage = new Image(); //multiplayer
//
//  titleImage.src = "Title.png.webloc"; //image for title
//  singleplayerImage.src = "singleplayerButton.png"; //image for singleplayer button
//  multiplayerImage.src = "multiplayerButton.png"; //image for multiplayer button
//
//  context.clearRect(0, 0, context.canvas.width, context.canvas.height); //clears canvas
//  context.drawImage(titleImage, 50, -10); //draws title
//  context.drawImage(singleplayerImage, 1000, 1000);
//  context.drawImage(multiplayerImage, 1000, 1500);
// }
=======
>>>>>>> parent of 0010170... UPDATE

function runGame() {

  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  //
  // var bgImage = new Image(); //background
  // var titleImage = new Image(); //title
  // var singleplayerImage = new Image(); //singleplayer
  // var multiplayerImage = new Image(); //multiplayer
  //
  //
  // titleImage.src = "Title.png.webloc"; //image for title
  // singleplayerImage.src = "singleplayerButton.png"; //image for singleplayer button
  // multiplayerImage.src = "multiplayerButton.png"; //image for multiplayer button
  //
  // ctx.drawImage(titleImage, 50, -10); //draws title
  // ctx.drawImage(singleplayerImage, 1000, 1000);
  // ctx.drawImage(multiplayerImage, 1000, 1500);

<<<<<<< HEAD
  if (GAME.started) {
    handleRoadAnimation();
=======
>>>>>>> parent of 0010170... UPDATE
    handleBillAnimation();
    handleBobAnimation();
    handleBeansAnimation();

    context.clearRect(0,0,GAME.canvas.width,GAME.canvas.height);
    RenderBill(context);
    RenderBob(context);
    RenderBeans(context);
<<<<<<< HEAD
    RenderBabies(context);
    RenderWinLose(context);
    RenderBumParticles(context);
=======


>>>>>>> parent of 0010170... UPDATE

  } else {
    // 1 - Reposition the objects
    window.requestAnimationFrame(drawMenu);
    // context.font = "30px Arial";
    // context.fillText("Game Over      Level " + GAME.level, 135, 200);

  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
