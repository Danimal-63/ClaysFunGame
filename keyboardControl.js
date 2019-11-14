/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  bill : {
    up : false,
    down : false,
  }
};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.bill.up = true;
      break;
    case "ArrowDown":
      CONTROLS.bill.down = true;
      break;
    default:
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.bill.up = false;
      break;
    case "ArrowDown":
      CONTROLS.bill.down = false;
      break;
  }
});
