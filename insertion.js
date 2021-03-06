const insertionSort = array => {
  for (let i = 0; i < array.length; i++) {
    const current = array[i];
    let j;

    for (j = i - 1; j >= 0 && array[j] > current; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = current;
  }

  return array;
};

const testData = [4, 8, 7, 2, 6, 10, 9, 1, 3, 5];

console.log(insertionSort(testData));
