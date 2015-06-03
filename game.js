var Game = function(canvasId){
  this.canvas  = document.getElementById(canvasId);
  this.context = this.canvas.getContext('2d');
  this.pieces  = createPieces(this.context);
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
    var relLeft = e.pageX - canvasLeft;
    var relTop = e.pageY - canvasTop;
    console.log("left ", canvasLeft, " top ", canvasTop)
    console.log("pleft ", e.pageX, " ptop ", e.pageY)
    console.log("rel left ", relLeft, " rel top ", relTop)
    // how do we find the appropriate piece located at
    // relLeft, relTop
    console.log(e);
  });
}

Game.prototype.locatePiece = function(x,y) {
// var y = mouseY - circleY;
// var x = mouseX - circleX;
// var dist = Math.sqrt(y*y + x*x);

// if (dist < circleRadius) {
//   //go to google
// }
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

  // this.context.rect(piece.x,piece.y,80,80);
  // this.context.stroke();
}

var Piece = function(coordinates, context){
  this.state = 'lit';
  this.x = coordinates['x'];
  this.y = coordinates['y'];
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
