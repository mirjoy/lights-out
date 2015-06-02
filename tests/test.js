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
  describe('#togglePieceState()', function(){
    xit('should toggle a piece and each orthogonal piece', function(){
      var game = new Game();
      var pieces = []
      for(var i = 0; i < 25; i++){
        pieces.push(new Piece({state: 'lit', coordinates: [(1 + i % 5)]}));
        //idk something about assigning coords
      }
    game.togglePieceState(pieces[7])
      affectedPieces = [pieces[2], pieces[6], pieces[7], pieces[8], pieces[12]]
      nonAffectedPieces = [pieces[1], pieces[5], pieces[15]]
      for (var  = 0, len = affectedPieces.length;  < len; ++) {
        chai.assert.equal('unlit', affectedPieces[i].state);
      }
    for (var  = 0, len = nonAffectedPieces.length;  < len; ++) {
      chai.assert.equal('lit', nonAffectedPieces[i].state);
    }
    });
  });

  describe('#isOver?()', function(){
    xit('should determine when the game is finished', function(){
      var game = new Game();
      var pieces = []
      for(var i = 0; i < 25; i++){
        pieces.push(new Piece({state: 'unlit'}));
      }
    chai.assert(true === game.isOver?(), 'game should be over');
    });
  });

  describe('#turnNumber()', function(){
    xit('should keep count of how many turns have passed', function(){
      var game = new Game();
      for (var i = 0; i < 5; i++) {
        game.turnOver;
      }
      chai.assert.equal(5, game.turnNumber);
    });
  });

  describe('#currentTime()', function(){
    xit('should keep track of how long the game has been running', function(){
      var game = new Game();
      game.startTime = moment.duration(15, 'm');
      chai.assert.equal('15 minutes, 0 seconds', game.currentTime);
    });
  });
});


// pieces need to be drawn
// pieces need to know about neighbors???
// game needs to toggle up to five squares at a time
// if all pieces are unlit the game ends
// test how long a user has been playing
// test how many turns a player has taken
