
// Javascript Canvas Intro!

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

  // Initialize Spaceship
  GAME.wonFirst = true;
  GAME.lostFirst = true;
  GAME.over=false;
  InitializeRoad();
  InitializeBill();
  InitializeBob();
  InitializeBeans();
  InitializeBabies();
}
