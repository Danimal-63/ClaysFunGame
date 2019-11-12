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


function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects

    handleBillAnimation();
    handleBobAnimation();
    handleBeansAnimation();

    context.clearRect(0,0,GAME.canvas.width,GAME.canvas.height);
    RenderBill(context);
    RenderBob(context);
    RenderBeans(context);



  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
