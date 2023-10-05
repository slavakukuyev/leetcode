
function sortArray(arr: Array<number>) {
let iteration:number = 0;
	let sorted:boolean = false
        while (!sorted) {
            sorted = true 
            for(let i = 0; i < arr.length -1 ; i ++) {
                if(arr[i] > arr[i+1]) {
                    [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
                    sorted = false
                }
            }
          
          console.log(arr)
          iteration++
        }

        console.log("iterations", iteration)
}

let arr = [5,3,48,5,1,2]
sortArray(arr)
console.log(arr)


export { sortArray} ;
