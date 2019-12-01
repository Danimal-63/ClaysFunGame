/**
 *  Keydown event listener runs every time ANY key is pressed!
 *
 */

var CONTROLS = {
  bill : {
    up : false,
    down : false,
    fart : false,
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
    case "p":
      Pause();
      break;
  }
});


document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case "r":
      Resume();
      break;
    case "ArrowUp":
      CONTROLS.bill.up = false;
      break;
    case "ArrowDown":
      CONTROLS.bill.down = false;
      break;
    case " ":
     if (GAME.beanCount >=5){
        CONTROLS.bill.fart = true;
        for (var i =0;i < 40;i++)
        {
          Bill.bumParticles.push(new Particle(Bill.x + 10,Bill.y+20));
        }
        var num = Math.ceil(Math.random()*10);
        console.log(num);
        if (num == 1) fartSound1.play();
        else if (num == 2) fartSound2.play();
        else if (num == 3) fartSound3.play();
        else if (num == 4) fartSound4.play();
        else if (num == 5) fartSound5.play();
        else if (num == 6) fartSound6.play();
        else if (num == 7) fartSound7.play();
        else if (num == 8) fartSound8.play();
        else if (num == 9) fartSound9.play();
        else if (num == 10) fartSound10.play();
        GAME.beanCount -= 5;
        setTimeout(function(){ CONTROLS.bill.fart = false; }, 200);}
      break;
    case "k":
      Start();
      break;

  }
});
