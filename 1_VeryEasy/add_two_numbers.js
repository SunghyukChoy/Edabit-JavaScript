const Test = require('../test.js');

function addition(a, b) {
  return a + b;
}

Test.assertEquals(addition(2, 3), 5)
Test.assertEquals(addition(-3, -6), -9)
Test.assertEquals(addition(7, 3), 10)
Test.assertEquals(addition(88, 2), 90)
