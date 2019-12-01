function Particle(x,y) {
  this.x=x;
  this.y=y;
    this.speed=Math.random()*4+4;
  this.distanceTraveled=0;
  this.rotation=Math.random()*360;
}

function animateBumParticles() {
  for(var i =0; i < Bill.bumParticles.length; i++) {
    var radians = (Math.PI / 180) * Bill.bumParticles[i].rotation,
   cos = Math.cos(radians),
   sin = Math.sin(radians);

   Bill.bumParticles[i].x-=Math.abs(Bill.bumParticles[i].speed*sin);
   Bill.bumParticles[i].y+=Bill.bumParticles[i].speed*cos;

    Bill.bumParticles[i].distanceTraveled+=Bill.bumParticles[i].speed;

    if(Bill.bumParticles[i].distanceTraveled>100) {
      Bill.bumParticles.splice(i,1);
    }
  }
}

function RenderBumParticles(context) {
  context.fillStyle='rgb(130, 105, 52)';
  for(var i = 0; i < Bill.bumParticles.length; i++) {
    context.fillRect(Bill.bumParticles[i].x,Bill.bumParticles[i].y, 5,5);
  //  context.arc(Bill.bumParticles[i].x,Bill.bumParticles[i].y,2,0,2*Math.PI);
  //  context.fill();
  }
}
