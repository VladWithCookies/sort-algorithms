const swap = (array, a, b) => [array[a], array[b]] = [array[b], array[a]];

const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    swap(array, i, min);
  }

  return array;
};

const testData = [4, 8, 7, 2, 6, 10, 9, 1, 3, 5];

console.log(selectionSort(testData));
