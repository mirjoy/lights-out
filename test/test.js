var Canvas = require('canvas'),
    canvas = new Canvas(500, 500),
    context = canvas.getContext('2d');

describe('Piece', function(){
  describe('#toggleState()', function(){
    it('should return change a lit piece to unlit', function(){
      var piece1 = new Piece({state: 'lit'});
      piece1.toggleState();
      chai.assert.equal('unlit', piece1.state);
    });

    it('should return change an unlit piece to lit', function(){
      var piece1 = new Piece();
      piece1.state = 'unlit'
      piece1.toggleState()
      chai.assert.equal('lit', piece1.state);
    });
  });
  describe('#drawSelf()', function(){
    xit('should draw on the canvas', function(){
      var piece1 = new Piece();
      chai.assert.ok(piece1.drawSelf([100,100], null))
    });
  });
});

describe('Game', function(){
  describe('#createPieces()', function(){
    it('should create 25 pieces on the canvas', function(){
      game = new Game();
      game.createPieces(context);
      //canvas stub piece creation
      //chai.assert pieces.length === 25
    });
  });
  describe('#pieceNeighbors()', function(){
    xit('should determine if a Piece has neighbors', function(){
      //canvas stub piece creation
      //game.pieceNeighbors(pieces[1])
      //should be piece[2], piece[6]
    });
  });
  describe('#togglePieceState()', function(){
    xit('should toggle a piece and each orthogonal piece', function(){
      var game = new Game();
      var pieces = []
      //canvas stubbing here
      for(var i = 0; i < 25; i++){
        pieces.push(new Piece({state: 'lit', coordinates: [(1 + i % 5)]}));
        //idk something about assigning coords
      }
    game.togglePieceState(pieces[7])
      affectedPieces = [pieces[2], pieces[6], pieces[7], pieces[8], pieces[12]]
      nonAffectedPieces = [pieces[1], pieces[5], pieces[15]]
      for (var i = 0, len = affectedPieces.length; i < len; i++) {
        chai.assert.equal('unlit', affectedPieces[i].state);
      }
    for (var i = 0, len = nonAffectedPieces.length; i < len; i++) {
      chai.assert.equal('lit', nonAffectedPieces[i].state);
    }
    });
  });

  describe('#isWon()', function(){
    xit('should determine when the game is finished', function(){
      var game = new Game();
      var pieces = []
      for(var i = 0; i < 25; i++){
        pieces.push(new Piece({state: 'unlit'}));
      }
    chai.assert.equal(game.isWon, true);
    });

    xit('should know when game is not over', function(){
      var game = new Game('gameBoard')
      chai.assert.equal(game.isWon, false);
    });
  });

  describe('#numberOfPlays()', function(){
    xit('should start with zero plays', function(){
      var game = new Game('gameBoard');
      chai.assert.equal(game.numberOfPlays, 0)
    });

    xit('should keep count of how many plays have occured', function(){
      var game = new Game();
      for (var i = 0; i < 5; i++) {
        game.togglePieceState();
      }
      chai.assert.equal(game.numberOfPlays, 5);
    });
  });

  describe('#currentTime()', function(){
    xit('should know how long a user has been playing', function(){
      // explore moment.js
      var game = new Game('gameBoard');
      game.begin();
      // need to set 200 ms delay?
      chai.assert.equal(game.timePlayed, 200)
    });
  });
});
