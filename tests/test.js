describe('Piece', function(){
  describe('#toggleState()', function(){
    xit('should return change a lit piece to unlit', function(){
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
  });
});
