"use strict";
var distancePerPoint = 7;
var drawFPS = 60;

var orig = document.querySelector("path"),
  length,
  timer;
//orig.addEventListener("mousein", startDrawingPath, false);
//orig.addEventListener("mouseout", stopDrawingPath, false);

function startDrawingPath() {
  length = 0;
  orig.style.stroke = "#ffffff";
  timer = setInterval(increaseLength, 1000 / drawFPS);
}

function increaseLength() {
  var pathLength = orig.getTotalLength();
  length += distancePerPoint;
  orig.style.strokeDasharray = [length, pathLength].join(" ");
  if (length >= pathLength) clearInterval(timer);
}

//function stopDrawingPath() {
//  clearInterval(timer);
//  orig.style.stroke = "";
//}
startDrawingPath();

