var Game = function(canvasId){
  this.canvas  = document.getElementById(canvasId);
  this.context = this.canvas.getContext('2d');
  this.pieces  = createPieces(this.context);
  this.numberOfPlays = 0
  this.timer = 0
  this.pieces[Math.floor(Math.random()*this.pieces.length)].toggleState();
};

Game.prototype.init = function () {
  this.bindClickHandler();
  this.render();
}

Game.prototype.bindClickHandler = function() {
  var game = this;
  this.canvas.addEventListener("click", function(e) {
    var canvasLeft = game.canvas.offsetLeft;
    var canvasTop = game.canvas.offsetTop;
    var relLeft = (e.pageX - canvasLeft) - 40;
    var relTop = (e.pageY - canvasTop) - 40;
    var piece = game.locatePiece(relLeft, relTop)
    piece.toggleState();
    game.findNeighbors(piece);
    game.render();
  });
}

Game.prototype.locatePiece = function(x,y){
  var foundPiece = null;

  this.pieces.forEach(function(piece){
    if ((piece.centerX - 50 < x && x < piece.centerX + 50) &&
        (piece.centerY - 50 < y && y < piece.centerY + 50)) {
      foundPiece = piece;
      this.numberOfPlays++
    }
  });

  return foundPiece;
}

<<<<<<< HEAD
Game.prototype.isWon = function(){
  var ended = true
  this.pieces.forEach(function(piece){
    if(piece.state === "lit")
    ended = false
  })
  return ended
=======
Game.prototype.findNeighbors = function(clickedPiece){
  var neighbors = [];

  this.pieces.forEach(function(piece){

    if (((clickedPiece.x + 80 === piece.x || clickedPiece.x - 80 === piece.x) && clickedPiece.y === piece.y) ||
        ((clickedPiece.y + 80 === piece.y || clickedPiece.y - 80 === piece.y) && clickedPiece.x === piece.x)) {
      neighbors.push(piece);
    }
  });

 neighbors.forEach(function(piece){
  return piece.toggleState();
 });
>>>>>>> master
}

Game.prototype.render = function() {
  var game = this;
  this.pieces.forEach(function(piece) {
     game.renderPiece(piece);
  });
}

Game.prototype.renderPiece = function(piece) {
  if (piece.state === 'lit') {
    var fillColor = '#d3d3d3'
  }
  else {
    var fillColor = '#000';
  }

  this.context.beginPath();
  this.context.fillStyle = fillColor;
  this.context.arc(piece.x, piece.y, 30, 0, 2*Math.PI, false);
  this.context.fill();
  this.context.closePath();

  this.context.rect(piece.centerX, piece.centerY, 80, 80);
  this.context.stroke();
}

<<<<<<< HEAD
var Piece = function(coordinates){
  this.state = 'lit';
  this.x = coordinates['x'] || null;
  this.y = coordinates['y'] || null;
=======
var Piece = function(coordinates, state){
  this.state = state || 'lit';
  this.x = coordinates['x'];
  this.y = coordinates['y'];
>>>>>>> master
  this.centerX = this.x - 40;
  this.centerY = this.y - 40;
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
    var y = 80 + (i * 80);

    for (var j = 0; j < 5; j++) {
      var x = 80 + (j * 80);
      pieces.push(new Piece({ x: x, y: y }, context));
    }
  }

  return pieces;
};

window.onload = function(){
  var game = new Game("gameBoard");
  game.init();
};
