/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

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


/***/ }
/******/ ]);