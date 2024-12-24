// let arr =["a", "b", "nitan"]

// console.log(arr.length)

// let arr =[ ]

// if (arr.length === 0) {
//     console.log ("array is empty")
    
// } else {
//    console.log ("It is not empty")
    
// }

let isArrayEmpty = (arr) =>{ 
    if (arr.length === 0) {
    return ("array is empty")
    
} else {
   return ("It is not empty")
}

}
let _isArrayEmpty = isArrayEmpty([1,3])
console.log(_isArrayEmpty)