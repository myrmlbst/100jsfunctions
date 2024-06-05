function mergeSortedArrays(numbers1, numbers2) {
  const result = [];

  let i = 0;
  let j = numbers2.length - 1;

  while (i < numbers1.length || j >= 0) {
    if (i >= numbers1.length) {
      result.push(numbers2[j]);
      j--;
    }
    
    if (j < 0) {
      result.push(numbers1[i]);
      i++;
      continue;
    }
    
    const smallestInNumbers1 = numbers1[i];
    const smallestInNumbers2 = numbers2[i];

    if (smallestInNumbers1 < smallestInNumbers2) {
      result.push(smallestInNumbers1);
      i++;
    }
    else {
      result.push(smallestInNumbers2);
      j--;
    }
  }

  return result;
}

export { mergeSortedArrays };
