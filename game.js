var Game = function(canvasId){
  var canvas = document.getElementById(canvasId);
  var context = canvas.getContext('2d');
  drawBoard(context);
  createPieces(context);

};

var Piece = function(coordinates, context){
  this.state = 'lit';
  this.x = coordinates['x'];
  this.y = coordinates['y'];
  context.beginPath();
  context.fillStyle = '#424';
  context.arc(coordinates['x'] - 20, coordinates['y'] - 20, 30, 0, 2*Math.PI, false);
  context.fill();
  context.closePath();
}

Piece.prototype.toggleState = function(){
  if (this.state === 'lit'){
    return this.state = 'unlit';
  }
  else {
    return this.state = 'lit';
  }
}

var createPieces = function(context){
    var pieces = [];

    for (var i = 0; i < 5; i++) {
        var x = 80 + (i * 80);

      for (var j = 0; j < 5; j++) {
        var y = 80 + (j * 80);
        pieces.push(new Piece({ x: x, y: y }, context));
      }
    }

    return pieces;
  };

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
