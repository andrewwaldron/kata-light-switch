describe('fewest.moves.kata', function() {
  var subject;

  beforeEach(function() {
    subject = kata;
  });

  it('can handle a matrix where all lights are already off', function() {
    var matrix = [
      [0, 0, 0],
      [0, 0, 0]
    ];

    expect(kata.getMinimumCost(matrix)).toEqual(0);
  });

  it('can turn off a corner with lights on', function() {
    var matrix = [
      [1, 1, 0],
      [1, 0, 0]
    ];

    expect(kata.getMinimumCost(matrix)).toEqual(1);
  })
});