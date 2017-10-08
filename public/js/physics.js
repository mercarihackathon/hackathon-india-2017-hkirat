var MODI = 3;
var ay1 = -10 * MODI; //g1
var x1 = 0;
var y1 = 20;
var z1 = -5;
var vy1 = 0;
var f = false;
var ay2 = -1.6 * MODI/1.6;
var vy2 = 0;
var y2 = 10;
var f2 = false;

var ay3 = -24.79 * MODI;
var vy3 = 0;
var y3 = 10;
var f3 = false;
var vy3Max = -1;
var vy2Max = -1;
var vy1Max = -1;

var update = function (modifier)  {
  vy1 = vy1 - ((ay1) * modifier);
  y1 = y1 - (vy1 * modifier);
  $('#sphere1').attr('position', "-20 "+y1 + " -3");
  if(y1<2 && !f) {
    f = true;
    if(vy1Max == -1) {
      vy1Max = vy1;
    }
    vy1 = -1 * vy1Max;
  } else {
    f = false;
  }
  vy2 = vy2 - ((ay2) * modifier);
  y2 = y2 - (vy2 * modifier);
  if(y2<-3 && !f2) {
    f2 = true;
    if(vy2Max == -1) {
      vy2Max = vy2;
    }
    vy2 = -1 * vy2Max;
  } else {
    f2 = false;
  }
  $('#sphere2').attr('position', "0 "+y2 + " -5");
  

  vy3 = vy3 - ((ay3) * modifier);
  y3 = y3 - (vy3 * modifier);
  if(y3<2 && !f3) {
    f3 = true;
    if(vy3Max == -1) {
      vy3Max = vy3;
    }
    vy3 = -1 * vy3Max;
  } else {
    f3 = false;
  }
  $('#sphere3').attr('position', "20 "+y3 + " -5");
};

var phys = function () {
  var now = Date.now();
  var delta = now - then;
  update(delta / 1000);
  //render();
  then = now;
  requestAnimationFrame(phys);
};
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
var then = Date.now();
phys();
