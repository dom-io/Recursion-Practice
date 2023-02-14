// Iterative function
function fibs(n) {
  let fibArr = [0, 1];

  if (n <= 0) return 'Enter a valid number';
  if (n === 1) return [0];
  if (n === 2) return fibArr;
  for (let i = 2; i < n; i++) {
    fibArr.push(fibArr[fibArr.length - 2] + fibArr[fibArr.length - 1]);
  }
  return fibArr;
}

console.log(fibs(-2));
console.log(fibs(1));
console.log(fibs(2));
console.log(fibs(8));
console.log(fibs(13));
