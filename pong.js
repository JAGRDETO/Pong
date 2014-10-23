$(function(){

  var context;
  var mouse;
  var x  = 0;
  var y  = 0;
  var dx = 1;
  var dy = 1;

  game = document.getElementById('game');

  init();

  function init() {
    context = game.getContext('2d');
    setInterval(drawBall, 1);
  }

  function drawBall() {
    if (y > 640) {
      alert("game over");
      x  = 0;
      y  = 0;
      dx = 1;
      dy = 1;
    };
    if (x < 0 || x > 960) {
      dx =- dx };
    if (y < 0 || y > 800) {
      dy =- dy };
    if (y > 595 && x <= mouse + 80 && x >= mouse - 80) {
      dy =- dy;
      dy = dy*1.1;
      dx = dx*1.1;
    };
    context.clearRect(0, 0, 960, 700);
    drawPaddle(mouse);
    context.beginPath();
    context.fillStyle = "#ffffff";
    context.arc(x, y, 8, 0, Math.PI*2, true);
    context.fill();
    x += dx;
    y += dy;
  };

  function drawPaddle(x) {
    console.log(x);
    context.fillRect(x - 80, 600, 160, 10);
    context.fillStyle = "white";
  };

  $('canvas').mousemove(function(e) {
    mouse = e.clientX -10;
    setInterval(drawPaddle(mouse), 1);
  });
})
