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

	__webpack_require__(1);
	(function webpackMissingModule() { throw new Error("Cannot find module \"bundle.js\""); }());


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Game = function(canvasId){
	  this.canvas  = document.getElementById(canvasId);
	  this.context = this.canvas.getContext('2d');
	  this.pieces  = createPieces(this.context);
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
	    var piece = game.locatePiece(relLeft, relTop).toggleState();
	    game.findNeighbors();
	    game.render();

	    console.log("left ", canvasLeft, " top ", canvasTop)
	    console.log("pleft ", e.pageX, " ptop ", e.pageY)
	    console.log("rel left ", relLeft, " rel top ", relTop)
	    console.log(e);
	    console.log(piece);
	    console.log(piece.state);
	  });
	}

	Game.prototype.locatePiece = function(x,y){
	  var foundPiece = null;

	  this.pieces.forEach(function(piece){
	    if ((piece.centerX - 50 < x && x < piece.centerX + 50) &&
	        (piece.centerY - 50 < y && y < piece.centerY + 50)) {
	      foundPiece = piece;
	    }
	  });

	  return foundPiece;
	}

	Game.prototype.findNeighbors = function(piece){

	debugger;
	  var neighbors = [];

	  this.pieces.forEach(function(piece){
	    if ((piece.centerX - 100 < x && x < piece.centerX + 100) &&
	        (piece.centerY - 100 < y && y < piece.centerY + 100)) {
	      neighbors.push(piece);
	    }
	  });

	  return neighbors.forEach(toggleState);
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

	var Piece = function(coordinates, state){
	  this.state = state || 'lit';
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


/***/ }
/******/ ]);