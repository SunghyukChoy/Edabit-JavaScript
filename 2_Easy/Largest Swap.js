const Test = require('../test.js');

/**
 * Largest Swap
 * @see https://edabit.com/challenge/hD3euqPHM82Cbr7R8
 * @param {*} num 
 * @return 원래의 num이 num의 각 자리의 수를 서로 바꿨을 때의 그 수보다 큰가. largestSwap(43) ➞ true
 */
function largestSwap(num) {
	return num % 10 <= num / 10;

	// Other Solution
	// return num.toString().charAt(0) >= num.toString().charAt(1);
}

// Other Solution
// const largestSwap = (num) => Number(num.toString().split('').reverse().join('')) <= num;
// const largestSwap = num => Math.floor(num / 10) >= num % 10;

Test.assertEquals(largestSwap(27), false, '27 < 72, so not largest swap.')
Test.assertEquals(largestSwap(43), true, '43 > 34, so largest swap.')
Test.assertEquals(largestSwap(14), false, '14 < 41, so not largest swap.')
Test.assertEquals(largestSwap(53), true, '53 > 35, so largest swap.')
Test.assertEquals(largestSwap(99), true, 'Cannot do better, so largest swap.')