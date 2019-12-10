/*the game which is currently running (or was running, but is now over); this is
null at the beginning of the program*/
//Canvas and basic variables of canvas
var cvs = document.getElementById("mainCanvas");
var ctx = cvs.getContext("2d");
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

//draws the menu screen
function drawMenu(){
  var bgImage = new Image(); //background
  var titleImage = new Image(); //title
  var singleplayerImage = new Image(); //singleplayer
  var multiplayerImage = new Image(); //multiplayer


  titleImage.src = "Title.png.webloc"; //image for title
  singleplayerImage.src = "singleplayerButton.png"; //image for singleplayer button
  multiplayerImage.src = "multiplayerButton.png"; //image for multiplayer button

  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); //clears canvas
  ctx.drawImage(titleImage, 50, -10); //draws title
  ctx.drawImage(singleplayerImage, 1000, 1000);
  ctx.drawImage(multiplayerImage, 1000, 1500);
}

//the main method which will loop continuously
function main() {
  GAME.drawMenu();
  window.requestAnimationFrame(drawMenu);

  while (GAME.active && GAME != null) {
      GAME.updateGame(); //updates the game
      GAME.wonFirst = true;
      GAME.lostFirst = true;
      GAME.over=false;
      InitializeRoad();
      InitializeBill();
      InitializeBob();
      InitializeBeans();
      InitializeBabies();
      GAME.runGame(); //renders the game
  }
  //if no game is running
   //renders the menu screen
}


/**
 *  This is called once after the HTML of the page loads
 *
 */
function Pause(){
  GAME.gameSpeed = 0;
  Bob.speed = 0;
  GAME.paused=true;
  Bob.verticalSpeed=0;
  Bill.verticalSpeed=0;
}

function Resume(){
  GAME.gameSpeed = 2;
  Bob.speed = 0.2;
  GAME.paused=false;
  Bob.verticalSpeed=5;
  Bill.verticalSpeed=10;
}

function Start() {
  GAME.wonFirst = true;
  GAME.lostFirst = true;
  GAME.over=false;
  InitializeRoad();
  InitializeBill();
  InitializeBob();
  InitializeBeans();
  InitializeBabies();
}
