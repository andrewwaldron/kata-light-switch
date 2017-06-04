var kata = (function() {
  function getMinimumCost(lightMatrix) {
    if (allOff(lightMatrix)) return 0;

    return 1;
  }

  function allOff(matrix) {
    return _.all(matrix, function (matrixRow) {
      return _.all(matrixRow, function (element) { return element === 0; });
    });
  }

  return {
    getMinimumCost: getMinimumCost
  };
})();
