$(function(){

  var context;
  var mouse;
  var x  = 0;
  var y  = 0;
  var dx = 3;
  var dy = 3;
  var paddleSize = 160;
  var g = 255;
  var b = 255;

  var game = document.getElementById('game');

  init();

  function init() {
    context = game.getContext('2d');
    // setInterval(drawBlocks, 1);
    setInterval(drawBall, 9);
  };


  function drawBall() {
    if (y > 640) {
      alert("game over");
      x  = 0;
      y  = 0;
      dx = 1;
      dy = 1;
    };
    if (y > 90 && y < 140 && x > 300 && x < 800) {
      dy =- dy;
      g -= 30;
      b -= 30;
    }
    if (x < 0 || x > 960) {
      dx =- dx };
    if (y < 0 || y > 800) {
      dy =- dy };
    if (y > 595 && x <= mouse + 80 && x >= mouse - 80) {
      dy =- dy;
      dy = dy*1.05;
      dx = dx*1.05;
      paddleSize -= 2;
    };
    context.clearRect(0, 0, 960, 700);
    drawPaddle(mouse);
    drawBlocks();
    context.beginPath();
    context.fillStyle = "rgb(255,255,255)";
    context.arc(x, y, 8, 0, Math.PI*2, true);
    context.fill();
    x += dx;
    y += dy;
  };


  function drawPaddle(x) {
    context.fillStyle = "rgb(255,255,255)";
    context.fillRect(x - (paddleSize/2), 600, paddleSize, 10);
  };
  function drawBlocks() {
    context.fillStyle = "rgb(255,"+ g +"," + b +")";
    // context.fillStyle = "rgb(255,255,255)";
    context.fillRect(300, 100, 500, 30);
  };


  $('canvas').mousemove(function(e) {
    mouse = e.clientX -10;
    // setInterval(drawPaddle(mouse), 1);
    drawPaddle(mouse);

  });
})
