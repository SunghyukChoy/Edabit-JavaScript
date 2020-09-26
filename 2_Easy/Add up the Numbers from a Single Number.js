const Test = require('../test.js');

/* START SOLUTION AREA */
/**
 * Add up the Numbers from a Single Number
 * @see https://edabit.com/challenge/4gzDuDkompAqujpRi
 * @param {*} num 
 * @return 주어진 정수까지 더한 값 리턴
 */
function addUp(num) {
  var sum = 0;
  for (var i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;

  // Other Soloution
  // return (num * (num + 1)) / 2;

  // Other Solution
  /* if (num === 1) {
    return 1;
  }
  return num + addUp(num - 1); */
}
/* E N D SOLUTION AREA */


/* START TEST AREA */
Test.assertEquals(addUp(4), 10)
Test.assertEquals(addUp(13), 91)
Test.assertEquals(addUp(600), 180300)
Test.assertEquals(addUp(392), 77028)
Test.assertEquals(addUp(53), 1431)
Test.assertEquals(addUp(897), 402753)
Test.assertEquals(addUp(23), 276)
Test.assertEquals(addUp(1000), 500500)
Test.assertEquals(addUp(738), 272691)
Test.assertEquals(addUp(100), 5050)
Test.assertEquals(addUp(925), 428275)
Test.assertEquals(addUp(1), 1)
Test.assertEquals(addUp(999), 499500)
Test.assertEquals(addUp(175), 15400)
Test.assertEquals(addUp(111), 6216)
/* E N D TEST AREA */