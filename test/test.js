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
      piece1.toggleState();
      chai.assert.equal('lit', piece1.state);
    });

    it('should know its neighbors', function(){
      var piece1 = new Piece();
      chai.assert.equal(piece1.findNeighbors.length, 3);
    });
  });
});

describe('Game', function(){
  it('should know how many turns have been played', function(){
    var game = new Game('gameBoard');
    chai.assert.equal(game.numberOfPlays, 0)
  });

  it('should know how long a user has been playing', function(){
    var game = new Game('gameBoard');
    // need to set 200 ms delay?
    chai.assert.equal(game.timePlayed, 200)
  });

  it('should keep a timer of how many seconds have passed', function(){
    var game = new Game('gameBoard');
    setTimeout(function(){}, 2000);
    // need to set 200 ms delay?
    chai.assert.equal(game.timer, 2)
  });

  it('should know if the game is over', function(){
    var game = new Game('gameBoard')
    var game2 = new Game('gameBoard');
    game2.pieces.forEach(function(piece){
      piece.state = "unlit";
    });
    chai.assert.equal(game.isWon(), false);
    chai.assert.equal(game2.isWon(), true);
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
  });

  describe('#locatePiece', function(){
   it('should know if it is clicked', function(){
      var game = new Game('gameBoard');
      var piece1 = game.pieces[0];
      var piece2 = game.pieces[4];

      chai.assert.equal(piece1, game.locatePiece(30, 30));
      chai.assert.equal(piece2, game.locatePiece(400, 70));
      chai.assert.isNull(game.locatePiece(900, 900), null);
    });
  });
