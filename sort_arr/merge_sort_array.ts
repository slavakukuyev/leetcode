
function mergeSort(arr: Array<number>): Array<number> {    
    if(arr.length < 2) {
        return arr
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < pivot) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }
    return [...mergeSort(left), pivot, ...mergeSort(right)]

}

let arr = [5,3,48,5,1,2]
arr = mergeSort(arr)
console.log(arr)


export { mergeSort} ;
