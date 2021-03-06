const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

const bubbleSort = array => {
  for (let i = array.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }

  return array;
};

const testData = [4, 8, 7, 2, 6, 10, 9, 1, 3, 5];

console.log(bubbleSort(testData));
