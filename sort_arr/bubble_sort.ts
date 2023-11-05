
function bubbleSort(arr: Array<number>): Array<number> {
    if(arr.length < 2) {
        return arr
    }

    let sorted: boolean = false
    while (!sorted) {
        sorted = true
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
                sorted = false
            }
        }
    }

    return arr
}

export { bubbleSort };
