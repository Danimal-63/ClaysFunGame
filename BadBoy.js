function InitializeBob() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  Bob = {
    x : 0,
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
        x : Bob.x,
        y : Bill.y,
    },
    scale : 5,
    speed : 0.25,
    verticalSpeed : 5,
    initialized : true,

  };
}
