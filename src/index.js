module.exports = function zeros(expression) {
  let counter2 = 0;
  let counter5 = 0;
  
  expression.split('*').forEach((value) => {
    if (value.includes('!!')) {
      countFactors(parseInt(value), 2);
    } else {
      countFactors(parseInt(value), 1);
    }
  });
  
  return counter2 > counter5 ? counter5 : counter2;
  
  function countFactors(number, step) {
    for (let num = number; num > 1;  num -= step) {
      counter2 += count(num, 2);
      counter5 += count(num, 5);
    }
  }

  function count(number, factor) {
    let count = 0;
    while (number % factor == 0) {
      number /= factor;
      count++;
    }
    return count;
  }

}
