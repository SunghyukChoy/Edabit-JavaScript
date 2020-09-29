const Test = require('../test.js');

/**
 * Basic Calculator
 * @see https://edabit.com/challenge/AtoWYYC9THAH5HbS2
 * @param {*} num1 
 * @param {*} operator 
 * @param {*} num2 
 * @return 주어진 수와 연산자를 이용해 계산한 값 리턴
 */
function calculator(num1, operator, num2) {
  /* if (operator === '/' && num2 === 0) {
    return "Can't divide by 0!"
  } else {
    switch (operator) {
      case '+':
        return num1 + num2
      case '-':
        return num1 - num2
      case '*':
        return num1 * num2
      case '/':
        return num1 / num2
    }
  } */

  // Other Solution
  /* return {
    '+': num1 + num2,
    '-': num1 - num2,
    '*': num1 * num2,
    '/': num2 ? num1 / num2 : 'Can\'t divide by 0!'
  }[operator] */

  // Other Solution
  /* operations = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b ? a / b : "Can't divide by 0!"
  }

  return operations[operator](num1, num2) */

  // Other Solution
  return operator === '/' && num2 === 0 ? "Can't divide by 0!" :
    eval(num1 + operator + num2);
}

// Other Solution
// const calculator = (num1, operator, num2) => operator + num2 === "/0" ? 'Can\'t divide by 0!' : eval(num1 + operator + num2);

Test.assertEquals(calculator(2, '/', 2), 1)
Test.assertEquals(calculator(10, '-', 7), 3)
Test.assertEquals(calculator(2, '*', 16), 32)
Test.assertEquals(calculator(2, '-', 2), 0)
Test.assertEquals(calculator(15, '+', 26), 41)
Test.assertEquals(calculator(2, '+', 2), 4)
Test.assertEquals(calculator(2, "/", 0), "Can't divide by 0!")