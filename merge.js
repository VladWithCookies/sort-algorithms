const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
};

const mergeSort = array => {
  if (array.length <= 1) return array;

  const middle = Math.floor(array.length / 2);
  const left  = mergeSort(array.slice(0, middle));
  const right = mergeSort(array.slice(middle));

  return merge(left, right);
};

const testData = [4, 8, 7, 2, 6, 10, 9, 1, 3, 5];

console.log(mergeSort(testData));
