var socket = io();
var client = -1;
socket.on("position", function(val) {
	if(val != $("a-camera").attr('position')) {
		console.log("position changed to " + val);
		$("a-camera").attr('position', (val));
	}
});

socket.on("link", function(room) {
//	alert(room);
});

socket.on("client", function(cl) {
	client = cl;
});

var latency = 0
  window.addEventListener("deviceorientation", handleMotion, true);
  function handleMotion(event) {
    latency++;
    if(!event.alpha) {
      return;
    }
    var alpha = event.alpha;
    var gamma = event.gamma;
    if(event.gamma >0) {
      alpha += 180;
      gamma*=-1;
      gamma+=90;
    } else if (event.gamma < 0 ) {
      gamma*=-1;
      gamma-=90;
    }
    var rot = gamma + " " + alpha + " " + 0;
    //document.getElementById(socket.id).setAttribute("rotation", rot );
    if(latency%4==0) {
      socket.emit("data", {"rotation" : rot} );
    }
    latency %= 100;
  }

var socket = io();
socket.on("maths", maths);
socket.on("physics", physics);
socket.on("chemistry", chemistry);
socket.on("astro", astro);
socket.on("com", com);

function maths() {
   window.location="/3";
}
function physics() {
  console.log("PHYSICS")
  window.location="/7";
}
function chemistry() {
  window.location="/5";
}

function astro() {
  window.location="/8";
}

function com() {
  window.location = "/2";
}