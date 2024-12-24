// let inputArl = [1, 2, 3, 4]

// let outputArl = inputArl.filter((value, i) =>{
//     if (value === 1) {
//         return true
//     } else if(value === 4) {
//         return true
//     } else {
//         return false
//     }
// })

// console.log(outputArl)




// let inputArl = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]

// let outputArl = inputArl.filter((value, i) =>{
//     if (value % 2 === 0) {
//         return true
//     } else{
//         return false
//     }
// })

// console.log(outputArl)


// let inputArl = [1, -2, 3, 4, -5, 6, 7, -8, 9, 10]

// let outputArl = inputArl.filter((value, i) =>{
//     if (value > 0) {
//         return true
//     } else{
//         return false
//     }
// })

// console.log(outputArl)

// let arr = (value) =>{
// let input = value.filter((values) =>{
//     if (typeof values === "string") {
//         return true
//     } else {
//         return false
//     }
// })
// return input;
// }

// let _input = arr(["a", 1, "b", 2, true])

// console.log(_input);


//  1st question.....................................................

// let input = (num) =>{
//     let filter = num.filter((value) =>{
//         if (value % 2 === 0) {
//             return true
//         } else {
//             return false
//         }
//     })
//     return filter
// }
// let _input = input([1, 2, ,6, 3])
// console.log(_input)


//  2nd question.....................................................

// let input = (num) =>{
//     let filter = num.filter((value) => {
//         if (value < 17) {
//             return true
//         } else {
//             return false
//         }
//     })
//     return filter
// }
// let _input = input([1,4,10,20,80,100])
// console.log(_input)

//  3rd question.....................................................


// let input = (num) => {
//     let filter = num.filter((value) =>{
//         if (value > 0) {
//             return true
//         } else {
//             return false
//         }
//     })
//     return filter
// }

// let _input = input([1, -2, 3, -4, "hello"])
// console.log(_input)


//  4th question.....................................................

// let input = (string) => {
//     let filter = string.filter((value) =>{
//         if (typeof(value) === "string") {
//             return true
//         } else {
//             return false
//         }
//     })
//     return filter
// }

// let _input = input(["abi", "raj", 1, 2, "hari"])
// console.log(_input)


//  5th question.....................................................

// let input = (string) => {
//     let filter = string.filter((value, i) =>{
//         return value.length >= 4
//     })
//     return filter
// }

// let _input = input(["abi", "raj", 1, 2, "hari"])
// console.log(_input)
 


//  6th question.....................................................

// let input = (num) =>{
//     // ##################     filters = [] => empty string.    ########################
//     let filters = num.filter((value) =>{
//         if (value === "" || value === 0 || value === false) {
//             return false
//         } else {
//             return true
//         }
//     })
//     return filters;
// }

// let _input = input(["", "ram", 5, false, 0, '', 100, "hari", "big"])
// console.log(_input)



// let input = (num) =>{
    // ##################     filters = [] => empty string.    ########################
//     let filters = num.filter((value) =>{
//         if (value) {
//             return true
//         } else {
//             return false
//         }
//     })
//     return filters;
// }

// let _input = input(["", "ram", 5, false, 0, '', 100, "hari", "big"])
// console.log(_input)


// filter punctuation marks.
// filter unmatchable email address.

