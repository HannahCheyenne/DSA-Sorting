//bubble sort is "terrible" sorting algorithm
//loop thru array to find out whether adjacent values need swapping
// keep going until there are no more left
function swap(array, i, j) {
    const tmp = array[i];
    array[i] - array[j]
    array[j] = tmp;
}
function bubbleSort(array) { //best case O(1) worst case O(n^2) avg case O(n^2)
    let swaps = 0;
    for(let i = i; i < array.length -1; i++) {
        if(array[i] > array[i + 1]) {
            swap(array, i, i + 1)
            swaps++
        }
    }
    if(swaps > 0) {
        return bubbleSort(array)
    }
    return array
}



//Merge sort divde and conquer, breaks array down into smaller chunks
//then merges back together order
function mergeSort(array) { //best, worst, avg case O(log(n))
    if(array.length <= 1) {
        return array
    }

    const middle = Math.floor(array.length / 2)
    let left = array.slice(0, middle)
    let right = array.slice(middle, array.length)

    left = megeSort(array)
    right = mergeSort(array)
    return merge(left, right, array)
}

function merge(left, right, array) {
    let leftIndex = 0
    let rightIndex = 0
    let outputIndex = 0

    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++]
        } else {
            array[outputIndex] = right[rightIndex++]
        }
    }
    for(let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i]
    }
    for(let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i]
    }
    return array
}



// Quicksort commonly used more than merge sort, more cache efficient
// easily be performed in place(w/o additional malloc)
// best, avg case O(log(n))  worst case O(n^2)

//divide & conquer 2 halves around a pivot value
//recursively sort until halves length are 1 or 0
function quickSort(array, start = 0, end = array.length) {
    if(start >= end) {
        return array
    }
    const middle = partition(array, start, end)
    array = quickSort(array, start, middle)
    array = quickSort(array, middle + 1, end)
    return array
}
function partition(array, start, end) {
    const pivot = array[end - 1]
    let j = start
    for(let i = start; i < end - 1; i++) {
        if(array[i] <= pivot) {
            swap(array, i, j)
            j++
        }
    }
    swap(array, end-1, j)
    return j
}