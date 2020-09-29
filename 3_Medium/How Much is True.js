const Test = require('../test.js');

/**
 * How Much is True?
 * @see https://edabit.com/challenge/GLbuMfTtDWwDv2F73
 * @param {*} arr
 * @return boolean 배열에서 true인 요소의 개수 리턴
 */
// 1.
function countTrue(arr) {
	var cnt = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			cnt++;
		}
	}
	return cnt;
}

// 2. Other Soluiton 
/* var countTrue = function (arr) {
	var cnt = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			cnt++;
		}
	}
	return cnt;
} */

// 3. Other Solution
/* var countTrue = arr => {
	var cnt = 0;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i]) {
			cnt++;
		}
	}
	return cnt;
} */

// 4. Other Solution
/* function countTrue(arr) {
	return arr.filter(Boolean).length;
} */

// 5. Other Solution
// const countTrue = arr => arr.filter(Boolean).length;

// 1에서 5까지 전부 같은 답. 코드를 축약하여 람다식을 만들어가는 과정

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