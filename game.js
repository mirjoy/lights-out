var Game = function(canvasId){
  this.context = document.getElementById(canvasId).getContext('2d');
  this.pieces = createPieces(this.context);
};

Game.prototype.init = function () {
  this.render();
}

Game.prototype.render = function() {
  var game = this;
  this.pieces.forEach(function(piece) {
     game.renderPiece(piece);
  });
}

Game.prototype.renderPiece = function(piece) {
  this.context.beginPath();
  this.context.fillStyle = '#000';
  this.context.arc(piece.x, piece.y, 30, 0, 2*Math.PI, false);
  this.context.fill();
  this.context.closePath();
}

var Piece = function(coordinates, context){
  this.state = 'lit';
  this.x = coordinates['x'];
  this.y = coordinates['y'];
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

window.onload = function(){
  var game = new Game("gameBoard");
  game.init();
};
