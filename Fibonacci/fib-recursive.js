const fibsRec = (n, arr = [0, 1]) => {
  if (arr.length >= n) {
    return arr.slice(0, n);
  }

  const num = arr.at(-1) + arr.at(-2);
  arr.push(num);
  return fibsRec(n, arr);
};

console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(2));
console.log(fibsRec(8));
console.log(fibsRec(13));
