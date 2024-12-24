// 1)check weather we have all  ages greater than 17 form the given input [1,2,20,30,40]



// let input =(age) =>{
//     let check = age.every((value, i) =>{
//         return value >= 17;
//     })
//     return check
// }
// let _input = input([1, 20, 20, 30, 40])
// console.log(_input)


// 2)check  weather we have nitan in the list ["utshab","nitan","ram","hari"]

// let input = (list) =>{
//     let check = list.find((value) =>{
//         if (value === "nitan") {
//             return true
//         } else {
//             return false
            
//         }
//     })
//     return check
// }
// let _input = input(["ram", "hari", "john", "nitan", "david"])
// console.log(_input)



// 3)check weather we have all even number in the list [2,4,9,6]

// let input = (list) =>{ 
//     let number = list.every((value, i) =>{
//         if (value % 2 === 0) {
//              return true
//         } else {
//              return false
                        
//       }
//     })
//                 return number
// }

// let _input = input([2,4,9,6])
// console.log(_input)


// check weather all students get pass mark from the list [ 40,30,80] here pass marks is 40


// let input = (students) =>{ 
//     let marks = students.every((value, i) =>{
//         if (value >= 40) {
//              return true
//         } else {
//              return false
                        
//       }
//     })
//                 return marks
// }

// let _input = input([40, 30, 80])
// console.log(_input)



// using some method find weather we have Bearer in the the string "Bearer token"


// let input = (list) =>{
//     let words = list.split(" ")
//     console.log(words)
//         let check = words.some((value) =>{
//             if (value === "Bearer") {
//                 return true
//             } else {
//                 return false
//             }
//         })
//         return check
//     }


// let _input = input( "Bearer token")
// console.log(_input)


// ################################################     OR     #################################

// let input = "Bearer token"

// let includeVersion = input.includes("Bearer")
// console.log(includeVersion)



//  check weather a person has smoking habit   ["smoking", "drinking", "biting nails"]


// let input = (habits) =>{ 
//     let check = habits.some((value, i) =>{
//         if (value === "smoking") {
//              return true
//         } else {
//              return false
                        
//       }
//     })
//                 return check
// }

// let _input = input( ["smoking", "drinking", "biting nails"])
// console.log(_input)

// lets suppose we have roles list as ["admin", "superAdmin", "customer"] check weather the array has admin

// let input = (list) =>{ 
//     let check = list.some((value, i) =>{
//         if (value === "admin") {
//              return true
//         } else {
//              return false
                        
//       }
//     })
//                 return check
// }

// let _input = input( ["admin", "superAdmin", "customer"])
// console.log(_input)







