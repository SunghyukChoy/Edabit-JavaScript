function assertEquals(a, b) {
  if (a == b) {
    let message = `Test Passed: Value == ${b}`;
    console.log(message)
  } else {
    let message = `FAILED: Expected: ${b}, instead got: ${a}`;
    console.error(message);
  }
}

exports.assertEquals = assertEquals;