function calculate(a, b, operator) {
    return eval(a + operator + b);
  }
  
  console.log(calculate(1,1, "+")); // 2
  console.log(calculate(2, 2, '-')); // 0
