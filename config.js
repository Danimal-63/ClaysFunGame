var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : false,
  level : 1,
  bean : [],
  jellyBean : [],
  baby : [],
  road : [],
  women: [],
  men:[],
  beanCount : 0,
  jellyBeanCount : 0,
  over : false,
  wonFirst : true,
  lostFirst : true,
  gameSpeed : 2,
  paused : false,
  bestScore : 9999999,
  started : true,
  level : 1
};

var Bill = {
  initialized : false,
  beans:0,
  jellyBeans : 0,
  paused : 0,
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
};

var JellyBeans={
  initialized : false,
  latest : {
    x : 0,
    y : 0
  }
}
