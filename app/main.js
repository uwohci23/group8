//import { changeTS } from './track.js';

// three.js instance
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Selected track and racer
var track = null;
var racer = "kartA";
var maplist = ["ascalon", "kryta", "mists", "shiverpeak", "southsun"];
var mapno = 0;

var current_map = null;
var current_difficulty = null;

var mainMenu = document.getElementById("mainMenu");

// Set selected racer
function setMapUP() {
  mapno--;
  if (mapno < 0) {
    mapno = maplist.length - 1;
  }
  document.getElementById("mapimg").src =
    "tracks/" + maplist[mapno] + "/map.png";
  document.getElementById("mapInfor").src =
    "tracks/" + maplist[mapno] + "/infor.png";
}

function setMapDOWN() {
  mapno++;
  if (mapno > maplist.length - 1) {
    mapno = 0;
  }
  document.getElementById("mapimg").src =
    "tracks/" + maplist[mapno] + "/map.png";
  document.getElementById("mapInfor").src =
    "tracks/" + maplist[mapno] + "/infor.png";
}

// Load a new track and hide the main menu
function loadMap(hardT) {
  current_map = maplist[mapno];
  current_difficulty = hardT;

  unloadTrack();
  document.getElementById("mainMenu").style.display = "none";
  track = new Track(maplist[mapno], hardT);
  //track.hardT = hardT;
}

// Dispose track and return to menu
function unloadTrack() {
  sfx.click.play();
  document.getElementById("gameMenu").style.display = "none";
  document.getElementById("tutorMenuS").style.display = "none";
  document.getElementById("tutorMenuS2").style.display = "none";
  document.getElementById("tutorMenuS3").style.display = "none";
  document.getElementById("tutorMenuS4").style.display = "none";
  document.getElementById("tutorMenuS5").style.display = "none";
  document.getElementById("tutorMenuS6").style.display = "none";
  document.getElementById("mainMenu").style.display = "block";

  document.getElementById("gameFail").style.display = "none";

  if (track !== null) {
    track.dispose();
    track = null;
  }
}

function blank() {
  document
    .getElementById("dragGroup")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });
}

// Pause game from menu or button
function pause() {
  sfx.click.play();
  track.state = "paused";
  document.getElementById("gameMenu").style.display = "flex";
}

// If user fails the game, display the fail page
function fail() {
  sfx.click.play();
  track.state = "pause";
  document.getElementById("gameMenu").style.display = "none";
  document.getElementById("gameFail").style.display = "flex";
}

// if user choose to retry the game => reload the map
function retry() {
  if (current_map != null) {
    loadMap(current_map);
  }
}

// tutor pause1 speed up
function tpause() {
  sfx.click.play();
  track.state = "paused";
  document.getElementById("tutorMenuS").style.display = "flex";
}

//tutor pause2 board
function tpause2() {
  sfx.click.play();
  track.state = "paused";
  document.getElementById("tutorMenuS2").style.display = "flex";
}

//tutor pause3 speed down
function tpause3() {
  sfx.click.play();
  track.state = "paused";
  document.getElementById("tutorMenuS3").style.display = "flex";
}

//tutor pause4 finish
function tpause4() {
  sfx.click.play();
  track.state = "paused";
  document.getElementById("tutorMenuS4").style.display = "flex";
}

function tpause5() {
  sfx.click.play();
  track.state = "paused";
  document.getElementById("tutorMenuS5").style.display = "flex";
}

function tpause6() {
  sfx.click.play();
  track.state = "paused";
  document.getElementById("tutorMenuS6").style.display = "flex";
}

// Resume game from menu or button
function unpause() {
  sfx.click.play();
  track.state = "running";
  document.getElementById("gameMenu").style.display = "none";
  document.getElementById("tutorMenuS").style.display = "none";
  document.getElementById("tutorMenuS2").style.display = "none";
  document.getElementById("tutorMenuS3").style.display = "none";
  document.getElementById("tutorMenuS4").style.display = "none";
  document.getElementById("tutorMenuS5").style.display = "none";
  document.getElementById("tutorMenuS6").style.display = "none";
}

// Background colors for each menu
var backgroundColors = {
  title: "#000000",
  main: "#a02700",
  racer: "#006900",
  tutor: "#006900",
  HTP: "#000000",
  track: "#00516b",
  about: "#111111",
  settings: "#111111",
  hard: "#32CD99",
};

// Switch between menus
function showMenu(section) {
  // Set new background color (animated via CSS)
  mainMenu.style.backgroundColor = backgroundColors[section];

  var menus = document.getElementsByClassName("popup");
  for (i = 0; i < menus.length; i++) {
    menus[i].style.display = "none";
  }

  sfx.click.play();
  document.getElementById("menu_" + section).style.display = "block";
}

// Set selected racer
function setRacerUP() {
  if (racer == "kartA") {
    racer = "kartC";
    document.getElementById("carimg").src = "graphics/racers/carC.png";
    document.getElementById("carInfor").src = "graphics/UICC.png";
  } else if (racer == "kartB") {
    racer = "kartA";
    document.getElementById("carimg").src = "graphics/racers/carA.png";
    document.getElementById("carInfor").src = "graphics/UICA.png";
  } else {
    racer = "kartB";
    document.getElementById("carimg").src = "graphics/racers/carB.png";
    document.getElementById("carInfor").src = "graphics/UICB.png";
  }
}

function setRacerDOWN() {
  if (racer == "kartA") {
    racer = "kartB";
    document.getElementById("carimg").src = "graphics/racers/carB.png";
    document.getElementById("carInfor").src = "graphics/UICB.png";
  } else if (racer == "kartB") {
    racer = "kartC";
    document.getElementById("carimg").src = "graphics/racers/carC.png";
    document.getElementById("carInfor").src = "graphics/UICC.png";
  } else {
    racer = "kartA";
    document.getElementById("carimg").src = "graphics/racers/carA.png";
    document.getElementById("carInfor").src = "graphics/UICA.png";
  }
}

function kartPic() {
  if (racer == "kartA") {
    return "graphics/racers/carA.png";
  } else if (racer == "kartB") {
    return "graphics/racers/carB.png";
  } else {
    return "graphics/racers/carC.png";
  }
}
function tutorM() {
  racer = "kartA";
  unloadTrack();
  document.getElementById("mainMenu").style.display = "none";
  track = new Track("inquest", 1);
  track.tutorS = true;
}

// Bind touch events to onscreen controls
document.getElementById("left").addEventListener(
  "touchstart",
  function (e) {
    input.left = true;
  },
  false
);
document.getElementById("left").addEventListener(
  "touchend",
  function (e) {
    input.left = false;
  },
  false
);

document.getElementById("right").addEventListener(
  "touchstart",
  function (e) {
    input.right = true;
  },
  false
);
document.getElementById("right").addEventListener(
  "touchend",
  function (e) {
    input.right = false;
  },
  false
);

document.getElementById("aButton").addEventListener(
  "touchstart",
  function (e) {
    input.A = true;
    input.up = true;
  },
  false
);
document.getElementById("aButton").addEventListener(
  "touchend",
  function (e) {
    input.A = false;
    input.up = false;
  },
  false
);

document.getElementById("bButton").addEventListener(
  "touchstart",
  function (e) {
    input.B = true;
    input.down = true;
  },
  false
);
document.getElementById("bButton").addEventListener(
  "touchend",
  function (e) {
    input.B = false;
    input.down = false;
  },
  false
);

// Only show the touch controls on touch devices
window.addEventListener("touchstart", function () {
  document.getElementById("touch").style.display = "block";
});

// Disable context menu on touch elements
window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

// Long press bug fix for iOS safari
document.ontouchmove = function (event) {
  event.preventDefault();
};

// fullscreen support for all browsers except (drumroll please) Safari
function toggleFullscreen() {
  sfx.click.play();
  var elem = document.documentElement;
  if (
    !document.fullscreenElement &&
    !document.mozFullScreenElement &&
    !document.webkitFullscreenElement &&
    !document.msFullscreenElement
  ) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}

// Show hidden track and racer
function meow() {
  var cats = document.getElementsByClassName("secret");
  for (i = 0; i < cats.length; i++) cats[i].style.display = "block";
  sfx.lap.play();
}

var version = "1.4";

// debug stuff
//showMenu("track");
//setRacer("kartB");
//loadMap("ascalon");
