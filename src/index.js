function fibs(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        if (i == 0) {
            sequence[i] = 0;
        }
        else if (i == 1) {
            sequence[i] = 1;
        } else {
            sequence[i] = sequence[i - 1] + sequence[i - 2];
        }
    }
    return sequence;
}

function fibsRecursive(n) {
    if (n <= 0)
        return [];
    if (n == 1)
        return [0];
    if (n == 2)
        return [0, 1];
    
    let sequence = fibsRecursive(n - 1);

    sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
    return sequence;
}

function mergeSort(array) {
    // call recursive function on full array
    mergeSortSplit(array, 0, array.length - 1);
    // return sorted array
    return array;
}

function mergeSortSplit(array, left, right) {
    if (left >= right) 
        return;
    let middleSplit = Math.floor((left + right) / 2)
    mergeSortSplit(array, left, middleSplit);
    mergeSortSplit(array, middleSplit + 1, right);
    mergeSortMerge(array, left, middleSplit, right);
}

function mergeSortMerge(array, left, middle, right) {
    // store length of portion

    // store both sorted array halves
    let leftArray = array.slice(left, middle + 1);
    let rightArray = array.slice(middle + 1, right + 1);

    // i = left, j = right, k = merged
    let i = 0, j = 0, k = left;
    // Loop over all values in both arrays
    while (i < leftArray.length && j < rightArray.length) {
        // check left and right arrays and merge higher value
        if(leftArray[i] < rightArray[j]) {
            array[k] = leftArray[i];
            k++;
            i++;
        } else {
            array[k] = rightArray[j];
            k++;
            j++;
        }
        }
        // once either array is sorted, continue through the other
        while(i < leftArray.length) {
            array[k] = leftArray[i];
            k++;
            i++;
        }
        while(j < rightArray.length) {
            array[k] = rightArray[j];
            k++;
            j++
        }
    return;
}