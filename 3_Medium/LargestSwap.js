const Test = require('../test.js');

/* START SOLUTION AREA */
function largestSwap(num) {
	
	return num % 10 <= num / 10;
}



/* E N D SOLUTION AREA */


/* START TEST AREA */
Test.assertEquals(largestSwap(27), false, '27 < 72, so not largest swap.')
Test.assertEquals(largestSwap(43), true, '43 > 34, so largest swap.')
Test.assertEquals(largestSwap(14), false, '14 < 41, so not largest swap.')
Test.assertEquals(largestSwap(53), true, '53 > 35, so largest swap.')
Test.assertEquals(largestSwap(99), true, 'Cannot do better, so largest swap.')
/* E N D TEST AREA */


// how to test : 
// 1. change directory (ex - cd 1_VeryEasy)
// 2. run test (node 1_VeryEasy/add_two_numbers.js)