
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function compareLongerTextThanSix(word, index) {
  return word.length > 6 && index % 2 == 0;
}

const result = words.filter(compareLongerTextThanSix);
const result2 = words.filter(word => word.length > 6);
const result3 = words.filter(function (word) { 
  return word.length > 6; 
});

console.log(result);
console.log(result2);
console.log(result3);

// expected output: Array ["exuberant", "destruction", "present"]
