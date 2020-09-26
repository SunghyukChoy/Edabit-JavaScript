const Test = require('../test.js');

/* START SOLUTION AREA */
// function countTrue(arr) {
// 	var cnt = 0;
// 	for (var i = 0; i < arr.length; i++) {
// 		if (arr[i]) {
// 			cnt++;
// 		}
// 	}
// 	return cnt;
// }


// var countTrue = function (arr) {
// 	var cnt = 0;
// 	// ...code
// 	return cnt;
// }

// var countTrue = arr => {
// 	var cnt = 0;
// 	// ...code
// 	return cnt;
// }

const countTrue = r => r.filter(Boolean).length

function countTrue(r) {
	return r.filter(Boolean).length;
}

/* E N D SOLUTION AREA */


/* START TEST AREA */
Test.assertEquals(countTrue([true, false, false, true, false]), 2)
Test.assertEquals(countTrue([false, false, false, false]), 0)
Test.assertEquals(countTrue([]), 0)
Test.assertEquals(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]), 8)
Test.assertEquals(countTrue([true, false, true, true, false, false, false, false, false]), 3)
Test.assertEquals(countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]), 8)
Test.assertEquals(countTrue([true, false, true, true, true, false, true, true, false, false]), 6)
Test.assertEquals(countTrue([false, false, false, false, true, false, true, false, true, false, false]), 3)
Test.assertEquals(countTrue([true, false, false, false, true, false, false, true, false, false, false]), 3)
Test.assertEquals(countTrue([true, true, false, true, false, false, false, false, true, false]), 4)
Test.assertEquals(countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]), 9)
Test.assertEquals(countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]), 8)
Test.assertEquals(countTrue([true, true, false, false, false, false, true, false, true, true, false, true]), 6)
/* E N D TEST AREA */


// how to test : 
// 1. change directory (ex - cd 1_VeryEasy)
// 2. run test (node 1_VeryEasy/add_two_numbers.js)