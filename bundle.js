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
	  var canvas = document.getElementById(canvasId);
	  var context = canvas.getContext('2d');
	  drawBoard(context);
	  createPieces(context);

	};

	var Piece = function(){
	  this.state = 'lit';
	}

	Piece.prototype = function(coordinates, context){
	  context.beginPath();
	  context.fillStyle = '#424';
	  context.arc(coordinates[x], coordinates[y], 50, 0, 2*Math.PI, false);
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

	    for (var i = 0; i < 24; i++) {
	      var x = 80 ;
	      var y = 80 ;
	      pieces.push(new Piece({ x: x, y: y }, context));
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


/***/ }
/******/ ]);