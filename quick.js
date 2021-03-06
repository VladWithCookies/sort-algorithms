const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

const partition = (array, start, end) => {
  const pivot = array[end];
  let index = start;

  for (let i = start; i < end; i++) {
    if (array[i] < pivot) {
      swap(array, i, index);
      index++;
    }
  };

  swap(array, index, end);

  return index;
};

const quickSort = (array, start = 0, end = array.length - 1) => {
  if (start >= end) return array;

  const index = partition(array, start, end);

  quickSort(array, start, index - 1);
  quickSort(array, index + 1, end);

  return array;
};

const testData = [4, 8, 7, 2, 6, 10, 9, 1, 3, 5];

console.log(quickSort(testData));
