/**
 *  handleBillAnimation moves the bill based on its direction and
 *    keyboard control
 *
 */
function handleBillAnimation() {
  if (CONTROLS.bill.forward) {
    Bill.x += Bill.speed;
  }
  if (CONTROLS.bill.backward) {
    Bill.x -= Bill.speed * sin;
  }

  // Check if asteroid is leaving the boundary, if so, switch sides
  if (Bill.x > GAME.canvas.width) {
    Bill.x = 0;
  } else if (Bill.x < 0) {
    Bill.x = 600;
  } else if (Bill.y > GAME.canvas.height) {
    Bill.y = 0;
  } else if (Bill.y < 0) {
    Bill.y = 300;
  }
}

function RenderNewObject(context) {
  context.fillRect(NEW_OBJECT.x,NEW_OBJECT.y,50,50);
  // Draw a new item here using the canvas 'context' variable
}

function HandleNewObjectMovement() {

    NEW_OBJECT.x += 3;
    //NEW_OBJECT.y += 1;

}

function runGame() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {

    // 1 - Reposition the objects
    handleBillAnimation();
    HandleNewObjectMovement();

    // 2 - Clear the CANVAS
    context.clearRect(0, 0, 600, 300);

    // 3 - Draw new items
    RenderSpacebill(context);
    RenderNewObject(context);

  } else {
    context.font = "30px Arial";
    context.fillText("Game Over      Level " + GAME.level, 135, 200);
  }
  window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
