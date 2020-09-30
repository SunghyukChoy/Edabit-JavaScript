const Test = require('../test.js');

/**
 * Matchstick Houses
 * @see https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
 * @param {*} step 
 * @return 성냥개비로 집을 만들 때 필요한 성냥개비의 개수 리턴. step(house) = 0, match = 0 / step = 1, match = 6 / step = 2, match = 11 / step = 3, match = 16 / step = 4, match = 21 / ...
 */
function matchHouses(step) {
  if (step == 0) {
    return 0;
  }
  return step * 5 + 1;
}

// Other Solution
// var matchHouses = step => !step ? 0 : 5 * step + 1;

Test.assertEquals(matchHouses(1), 6)
Test.assertEquals(matchHouses(0), 0)
Test.assertEquals(matchHouses(17), 86)
Test.assertEquals(matchHouses(36), 181)
Test.assertEquals(matchHouses(15), 76)
Test.assertEquals(matchHouses(99), 496)
Test.assertEquals(matchHouses(3), 16)
Test.assertEquals(matchHouses(87), 436)