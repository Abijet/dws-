// ##########################################         FIND METHOD         ########################################
// The output of find is one of the element of input or undefined.


// let input = (element) =>{
//     let output = element.find((value, i) =>{
//         if (value === "nitan") {
//             return true
            
//         } else {
//             return false
            
//         }
//     })
//     return output
// }

// let _input = input([1, 2, 3, false, "nitan"])
// console.log(_input)    // nitan


// #############################               UNDEFINED             #########################################


// let input = (element) =>{
//     let output = element.find((value, i) =>{
//         if (value === 6) {
//             return true
            
//         } else {
//             return false
            
//         }
//     })
//     return output
// }

// let _input = input([1, 2, 3])
// console.log(_input)    // undefined


// ####################################        EVERY           ####################################
// The output of every is true if all element return true  else  output will be false.

// let input = (item) =>{
//     let output = item.every((value, i) =>{
//         if (value === 3) {
//             return true
//         } else {
//             return true
            
//         }
//     })
//     return output;
// }

// let _input = input([1, 2, 3, 4, 5])
// console.log(_input)  // true

// ####################################        SOME             ###################################
//  The output of some is either true or false 
// some will return true if one of the element return true

// let input = (item) =>{
//     let output = item.some((value, i) =>{
//         if (value === 3) {
//             return true
//         } else {
//             return false
            
//         }
//     })
//     return output;
// }

// let _input = input([1, 2, 3, 4, 5])
// console.log(_input)  // true


// #####################################################################################

// let input = (item) =>{
//     let output = item.every((value, i) =>{
//         if (value >= 18) {
//             return true
//         } else {
//             return false
            
//         }
//     })
//     return output;
// }

// let _input = input([1, 18, 11, 30, 25])
// console.log(_input) // false


// ##################################################################################################


// let input = (item) =>{
//     let output = item.some((value, i) =>{
//         if (value >= 18) {
//             return true
//         } else {
//             return false
            
//         }
//     })
//     return output;
// }

// let _input = input([1, 18, 11, 30, 2])
// console.log(_input)