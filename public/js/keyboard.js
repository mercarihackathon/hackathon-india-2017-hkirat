var socket = io();
var client = -1;
var prev = " ";
var main = function () {
  var val = "";
  if(!$("a-camera")) {
    requestAnimationFrame(main);
    return;
  }
  if($("a-camera").attr('position') == prev) {
    requestAnimationFrame(main);
    return;
  }
  prev = $("a-camera").attr('position');
  var pos = $("a-camera").attr('position');
  if(!pos) {
    requestAnimationFrame(main);
    return;
  }
  if(!pos.x) {
    pos.x = 0;
  }
  if(!pos.y) {
    pos.y = 0;
  }
  if(!pos.z) {
    pos.z = 0;
  }
  val = val + pos.x + " " + pos.y + " " + pos.z;
  socket.emit("position", val);      
  requestAnimationFrame(main);
};
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
main();

socket.on("client", function(cl) {
  client = cl;
});

socket.on("data", function(data) {
  document.getElementById("cam").setAttribute("rotation", data.rotation);
});
