
// Populate a global variable for the Bill
function InitializeBill() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');

  context.scale(1,1);
  Bill = {
    time : 0,
    bumParticles : [],
    stumble : false,
    x : 300,
    y : 150,
    positions : [
      {
        x : 0,
       	y : 3
      },
      {
        x : 2,
       	y : -3
      },
      {
        x : 0,
       	y : 0
      },
      {
        x : -2,
       	y : -3
      },
      {
        x : 0,
       	y : 3
      }
    ],
    latest : {
        x : Bill.x,
        y : Bill.y,
    },
    scale : 5,
    speed : .3,
    verticalSpeed : 10,
    initialized : true,
    beans:0,
    jellyBeans : 0,
    start : new Date(),
    elapsed : 0,
  };
}


// Populate a global variable for the Bill
