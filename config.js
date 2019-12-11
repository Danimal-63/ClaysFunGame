var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1,
  bean : [],
  baby : [],
  road : [],
  women: [],
  beanCount : 0,
  over : false,
  wonFirst : true,
  lostFirst : true,
  gameSpeed : 2,
  paused : false,
  bestScore : 9999999,
};

var Bill = {
  initialized : false,
  bumParticles : [],
  beans:0,
  paused:0,
  latest : {
    x : 0,
    y : 0
  }
};
var Bob = {
  initialized : false,
  latest : {
    x : 0,
    y : 0
  }
};

var Beans ={
  initialized : false,
  latest : {
    x : 0,
    y : 0
  }
}
