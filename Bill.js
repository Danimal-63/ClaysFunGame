
// Populate a global variable for the Bill
function InitializeBill() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  Bill = {
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
    speed : 3,
    initialized : true,
    beans:0,
    jellyBeans : 0,
    start : new Date(),
    elapsed : 0,
    paused:0
  };
}


// Populate a global variable for the Bill
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
    speed : 3,
    initialized : true,

  };
}

function InitializeBeans() {
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  context.scale(1,1);
  Beans= {
    x : 600,
    y : Math.random()*150+1,
    positions : [
      {
        x : 1,
       	y : 2
      },
      {
        x : 1,
       	y : -1
      },
      {
        x : 1,
       	y : 1
      },
      {
        x : -1,
       	y : -2
      },
      {
        x : 1,
       	y : 2
      }
    ],
    latest : {
        x :Beans.x,
        y : Beans.y,
    },
    scale : 5,
    speed : 3,
    initialized : true,
    beans:0
  };
}
