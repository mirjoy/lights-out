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

Game.prototype.isWon = function(){
  return this.pieces.every(function(piece){
    return !piece.isLit
  })
}


Game.prototype.findNeighbors = function(clickedPiece){
  game = this
    var neighbors = this.pieces.filter(function(piece){
      return game.areNeighbors(piece, clickedPiece)
    });

  neighbors.forEach(function(piece){
    return piece.toggleState();
  });
}

Game.prototype.areNeighbors = function(anchorPiece, clickedPiece){
  return this.verticleNeighbor(anchorPiece, clickedPiece) || this.horizontalNeighbor(anchorPiece, clickedPiece)
}
Game.prototype.verticleNeighbor = function(anchorPiece, clickedPiece){
  return this.withinX(anchorPiece, clickedPiece) && this.sameY(anchorPiece, clickedPiece);
}
Game.prototype.horizontalNeighbor = function(anchorPiece, clickedPiece){
  return this.withinY(anchorPiece, clickedPiece) && this.sameX(anchorPiece, clickedPiece)
}
Game.prototype.withinX = function(anchorPiece, clickedPiece){
  return clickedPiece.x + 80 === anchorPiece.x || clickedPiece.x - 80 === anchorPiece.x
}
Game.prototype.withinY = function(anchorPiece, clickedPiece){
  return clickedPiece.y + 80 === anchorPiece.y || clickedPiece.y - 80 === anchorPiece.y
}
Game.prototype.sameX = function(anchorPiece, clickedPiece){
  return clickedPiece.x == anchorPiece.x
}
Game.prototype.sameY = function(anchorPiece, clickedPiece){
  return clickedPiece.y == anchorPiece.y
}

Game.prototype.render = function() {
  var game = this;
  this.pieces.forEach(function(piece) {
    game.renderPiece(piece);
  });
}

Game.prototype.renderPiece = function(piece) {
  if (piece.isLit) {
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

var Piece = function(coordinates){
  this.isLit = false
    this.x = coordinates['x'];
  this.y = coordinates['y'];
  this.centerX = this.x - 40;
  this.centerY = this.y - 40;
}


Piece.prototype.toggleState = function(){
  if (this.isLit){
    return this.isLit = false;
  }
  else {
    return this.isLit = true;
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
