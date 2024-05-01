function getBiggestNumberInArrays(numbers1, numbers2) {
    var max1 = Math.max(...numbers1);
    var max2 = Math.max(...numbers2);
    var max = Math.max(max1, max2);
    
    return max;
}

export { getBiggestNumberInArrays };
