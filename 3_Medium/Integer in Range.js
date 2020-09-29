const Test = require('../test.js');

/**
 * Integer in Range?
 * @see https://edabit.com/challenge/YT2kXSMEtACPPk35R
 * @param {*} n 
 * @param {*} lower 
 * @param {*} upper 
 * @return 주어진 정수 n이 lower 이상, upper 미만의 값을 갖느냐. 만약 n이 정수가 아니라면 false 리턴
 */
function intWithinBounds(n, lower, upper) {

  /* if (Math.floor(n) != Math.ceil(n)) {
    return false;
  }
  return n < lower || n >= upper ? false : true; */

  // Other Solution
  return Number.isInteger(n) ? n >= lower && n < upper : false;
}

// Other Solution
// const intWithinBounds = (n, lower, upper) => (Number.isInteger(n) && lower <= n && upper > n)

Test.assertEquals(intWithinBounds(3, 1, 9), true)
Test.assertEquals(intWithinBounds(6, 1, 6), false)
Test.assertEquals(intWithinBounds(4.5, 3, 8), false)
Test.assertEquals(intWithinBounds(-5, -10, 6), true)
Test.assertEquals(intWithinBounds(4, 0, 0), false)
Test.assertEquals(intWithinBounds(10, 9, 11), true)
Test.assertEquals(intWithinBounds(6.3, 2, 6), false)
Test.assertEquals(intWithinBounds(6.3, 2, 10), false)
Test.assertEquals(intWithinBounds(9, 2, 3), false)
Test.assertEquals(intWithinBounds(9, 9, 9), false)
Test.assertEquals(intWithinBounds(-3, -5, -2), true)
Test.assertEquals(intWithinBounds(-3, -5, -3), false)
Test.assertEquals(intWithinBounds(-3, -10, 10), true)
Test.assertEquals(intWithinBounds(0, -3, 3), true)
Test.assertEquals(intWithinBounds(0, 0, 1), true)
Test.assertEquals(intWithinBounds(7, 7, 12), true)