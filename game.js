var Game = function(canvasId){
  var canvas = document.getElementById(canvasId);
  var context = canvas.getContext('2d');
  drawBoard(context);

  var Piece = function(){
    this.state = 'lit';


  }
};

Piece.prototype = {
  state: 'lit',
  coordinates: [x,y],
  draw: function(state, coordinates, context){
    context.beginPath();
    context.fillStyle = '#424';
    context.arc(coordinates[0], coordinates[1], 50, 0, 2*Math.PI, false);
    context.fill();
    context.closePath();
  }
}

var drawBoard = function(context){
  context.beginPath();
  context.moveTo(20, 420);
  context.lineTo(20, 20);
  context.lineTo(420, 20);

  var x = 20;
  var y = 20;

  for (var i = 0; i < 5; i++) {
    verticalOffset = i * 80;
    for (var j = 1; j < 6; j++) {
      y += (80 * j);
      context.moveTo(x, y);
      x += (80 + verticalOffset);
      context.lineTo(x, y);
      y -= 80;
      context.lineTo(x, y);
      x = 20;
      y = 20;
    }
  }
  context.stroke();
};


 window.onload = function(){
    new Game("gameBoard");
  };
