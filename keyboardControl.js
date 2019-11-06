/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  bill : {
    forward : false,
    back : false,
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
  }
};


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "ArrowUp":
      CONTROLS.bill.forward = false;
      break;
    case "ArrowDown":
      CONTROLS.bill.backward = false;
      break;
  }
};
