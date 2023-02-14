const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
};

const merge = (leftArr, rightArr) => {
  const mergedArr = [];

  while (leftArr.length > 0 && rightArr.length > 0) {
    const minArr = leftArr[0] < rightArr[0] ? leftArr : rightArr;
    const mergeArrs = minArr.shift();
    mergedArr.push(mergeArrs);
  }
  return mergedArr.concat(leftArr, rightArr);
};

console.log(mergeSort([5, 7, 1, 11, 0, -4]));
