var Game = function(canvasId){
  this.canvas  = document.getElementById(canvasId);
  this.context = this.canvas.getContext('2d');
  this.pieces  = createPieces(this.context);
  this.numberOfPlays = 0;
  this.timer = 0;
};

Game.prototype.init = function (){
  this.bindClickHandler();
  this.render();
}

Game.prototype.bindClickHandler = function(){
  var game = this;
  this.canvas.addEventListener("click", function(e) {
    var canvasLeft = game.canvas.offsetLeft;
    var canvasTop = game.canvas.offsetTop;
    var relLeft = (e.pageX - canvasLeft) - 40;
    var relTop = (e.pageY - canvasTop) - 40;
    var piece = game.locatePiece(relLeft, relTop);
    debugger;
    piece.toggleState();
    game.findNeighbors(piece);
    game.render();
  });
}

Game.prototype.locatePiece = function(x,y){
   return this.pieces.filter(function(piece){
   if ((piece.centerX - 50 < x && x < piece.centerX + 50) &&
      (piece.centerY - 50 < y && y < piece.centerY + 50)){
    return piece;
   }
  }).pop();
}

Game.prototype.isWon = function(){
  return this.pieces.every(function(piece){
    return !piece.isLit
  });
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
  var canvasOffset = 40;
  this.isLit = false;
  this.x = coordinates['x'];
  this.y = coordinates['y'];
  this.centerX = this.x - canvasOffset;
  this.centerY = this.y - canvasOffset;
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

  setInitialLitPieces(pieces);

  return pieces;
};

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

var newGameBoard = [[7,11,12,13,17], [0,1,2,6], [13,17,18,19,23], [15,20,21],
                    [7,11,12,13,17, 0,1,2,6], [2,7,8,10,11,13,16,17,18,19,23]];

var setInitialLitPieces = function(pieces){
  shuffle(newGameBoard).pop().forEach(function(pieceIndex){
    pieces[pieceIndex].toggleState();
  });
}

window.onload = function(){
  var game = new Game("gameBoard");
  game.init();
};
