function forLoop(array) {
  for ( var i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
  }
  return array;
}

var n;
function whileLoop (n) {
  while (n > 0) {
    console.log(n--);
  }
  return 'done';
}
