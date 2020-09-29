const Test = require('../test.js');

/**
 * A Redundant Function
 * @see https://edabit.com/challenge/hzxN9bAebBPNqdQto
 * @param {*} str 
 * @return 매개변수 str을 str을 반환하는 함수 작성
 */
function redundant(str) {

  return () => str;

  // Other Soultion
  /* return function () {
    return str;
  }; */
}

// Other Solution
// const redundant = str => () => str;

const f1 = redundant("apple")
const f2 = redundant("pear")
const f3 = redundant("")

Test.assertEquals(f1(), "apple")
Test.assertEquals(f2(), "pear")
Test.assertEquals(f3(), "")