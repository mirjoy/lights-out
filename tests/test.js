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
      chai.assert.equal(piece1.neighbors, [piece2, piece6, piece7]);
    });
  });
});

// pieces need to be drawn
// pieces need to know about neighbors???
// game needs to toggle up to five squares at a time
// if all pieces are unlit the game ends
// test how long a user has been playing
// test how many turns a player has taken
