/*the game which is currently running (or was running, but is now over); this is
null at the beginning of the program*/
//Canvas and basic variables of canvas
var cvs = document.getElementById("mainCanvas");
var ctx = cvs.getContext("2d");
var width = cvs.getAttribute('width');
var height = cvs.getAttribute('height');


var GAME = {
  active : false,
  paused : false
};
/**
 * Check to see if the user is hovering over or clicking on the button.
 */
 // window.onmousedown = function(e) {
 //     x = e.pageX - cvs.getBoundingClientRect().left
 //     y = e.pageY - cvs.getBoundingClientRect().top
 //
 //     if (x <= BUTTON1.x + BUTTON1.w || x >= BUTTON1.x - BUTTON1.w && y <= BUTTON1.y + BUTTON1.h || y >= BUTTON1.y - BUTTON1.h) {
 //       GAME.multiplayer = false;
 //       GAME.active = true;
 //       GAME.started = true;
 //     }
 //     else if(x <= BUTTON2.x + BUTTON2.w || x >= BUTTON2.x - BUTTON2.w && y <= BUTTON2.y + BUTTON2.h || y >= BUTTON2.y - BUTTON2.h){
 //       GAME.multiplayer = true;
 //       GAME.active = true;
 //       GAME.started = true;
 //     }
 // }

//draws the menu screen
function drawMenu(){
  var bgImage = new Image(); //background
  var titleImage = new Image(); //title
  var singleplayerImage = new Image(); //singleplayer
  var multiplayerImage = new Image(); //multiplayer



  titleImage.src = "Title.png.webloc"; //image for title
  singleplayerImage.src = "singleplayerButton.png"; //image for singleplayer button
  multiplayerImage.src = "multiplayerButton.png"; //image for multiplayer button

  var BUTTON1 = {
      x :  width/2 - singleplayerImage.width/2,
      y : 200,
      w : singleplayerImage.width,
      h : singleplayerImage.height
    };
    var BUTTON2 = {
      x : width/2 - multiplayerImage.width/2,
      y : 300,
      w : multiplayerImage.width,
      h : multiplayerImage.height
    };


    bgImage.onload = function(){
      ctx.drawImage(bgImage, 0, 0, width, height); //draws background
    }
    singleplayerImage.onload = function(){
      ctx.drawImage(singleplayerImage, BUTTON1.x, BUTTON1.y);
    }
    multiplayerImage.onload = function(){
        ctx.drawImage(multiplayerImage, BUTTON2.x, BUTTON2.y);
    }
    cvs.addEventListener("click", onCanvasClick, false);


  function onCanvasClick(e) {
    if(getCursorPosition(e)[0] >= BUTTON1.x && getCursorPosition(e)[0] <= BUTTON1.x + BUTTON1.w)
    {
      if(getCursorPosition(e)[1] >= BUTTON1.y && getCursorPosition(e)[1] <= BUTTON1.y + BUTTON1.h)
      {
        alert("singleplayer");
        GAME.active = true;
        GAME.multiplayer = false;
        runGame();
      }
    }
    if(getCursorPosition(e)[0] >= BUTTON2.x && getCursorPosition(e)[0] <= BUTTON2.x + BUTTON2.w)
    {
      if(getCursorPosition(e)[1] >= BUTTON2.y && getCursorPosition(e)[1] <= BUTTON2.y + BUTTON2.h)
      {
        alert("multiplayer");
        GAME.active = true;
        GAME.multiplayer = true;
        runGame();
      }
    }
  }
}

function getCursorPosition(e) {
    var x;
    var y;
    if (e.pageX != undefined && e.pageY != undefined) {
        x = e.pageX;
        y = e.pageY;
    }
    else {
        x = e.clientX + document.body.scrollLeft +
                  document.documentElement.scrollLeft;
        y = e.clientY + document.body.scrollTop +
                  document.documentElement.scrollTop;
    }
    x -= cvs.offsetLeft;
    y -= cvs.offsetTop;

  return [x,y];

}

//the main method which will loop continuously
function main() {
  drawMenu();


  // while (GAME.active && GAME != null) {
  //     GAME.updateGame(); //updates the game
  //     GAME.wonFirst = true;
  //     GAME.lostFirst = true;
  //     GAME.over=false;
  //     InitializeRoad();
  //     InitializeBill();
  //     InitializeBob();
  //     InitializeBeans();
  //     InitializeBabies();
  //     GAME.runGame(); //renders the game
  // }
  //if no game is running
   //renders the menu screen
}

  window.requestAnimationFrame(drawMenu);
/**
 *  This is called once after the HTML of the page loads
 *
 */
function Start() {
  GAME.wonFirst = true;
  GAME.lostFirst = true;
  GAME.over=false;
  InitializeRoad();
  InitializeBill();
  InitializeBob();
  InitializeBeans();
  InitializeBabies();
  InitializeJellyBeans();
}
