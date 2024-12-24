


// let ar1 = [1, 2, 3, 4]
// //                 
// let ar2 = ar1.map((value, i) => {
//     return value*2
// })

// console.log(ar2)

// #######################################  PRACTICE QUESTIONS  ######################################################


//  1st question.....................................................
// Map method should be used when length of input and output return same. for eg: [1, 3, 4, 5,] => [3, 9, 8, 15]

// let num = [1,3,4,5]

// let arr = num.map((value, i)=>
// {
//     if (value % 2 === 0) {
//         return value*2
//     } else {
//         return value*3
//     }
// })

// console.log(arr)

// ##################################       OR       #######################################

// let prac = (num) => {

// let arr = num.map((value, i)=>
// {
//     if (value % 2 === 0) {
//         return value*2
//     } else {
//         return value*3
//     }
// })
// return arr

// }
// let _prac = prac(([1, 3, 4, 5]))
// console.log(_prac)


// 2nd question .....................................................


// let inputs = (num) =>{

// let arr = num.map((value, i) => {

//     return value*2
// })
// return arr

// }
// let _prac = inputs([1, 2, 3, 4, 5])
// console.log(_prac)


//  3rd question .....................................................

// let input = (num) =>{

// let arr= num.map((value,i) =>{

//     if(i % 2 === 0){
//         return value*2
//     }else{
//         return value*0
//     }
// })
// return arr
// }
// let _prac = input([1, 2, 3, 4])
// console.log(_prac)


// 4th question .......................................................

// let convert = (string) => {
//     return string.toUpperCase()
// }

// let converting = convert("hello")
// console.log(converting)

// 5th question .................................................

// let convert = (string) =>{
//     return string.toLowerCase()
// }

// let converting = convert("HELLO")
// console.log(converting)

// 6th question .................................................

// let input = (string) =>{
//     return string.trim()
// }

// let trimed = input("    hello world    ")
// console.log(trimed)


// console.log(input('    hello world      '))


// 7th quesion ......................................................

// let input = (string) =>{
//     if (string.startsWith("Bearear")) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }
// input("Bearear name of my life")

// 8th question .....................................................

// let input = (string) =>{
//     return string.replace("nitan", "ram")
// }

// let replaced = input("my sir name is nitan")
// console.log(replaced)


// 9th question ......................................................

// let input = (string) =>{
//     if (string === "admin" || string === "superadmin" ) {
//         console.log(true)
//     } else {
//        console.log(false) 
//     }
// }

// input("superadmin")


//  10th question ...................................................

// let input = (string) =>{
//     return string.trim().toLowerCase()

// }
// let convert = input("          niTAn     ")
// console.log(convert)


// 11th question ....................................................

// let input = (string) => {
//     return string.length
// }

// let count = input("ram")
// console.log(count)


// 12th question................................................................


// let input =(string) =>{
//     let words = string.split(" ")

//     return words.map ((value) =>  value[0].toUpperCase() + value.slice(1)).join(" ")
// }

// let input1 = "my name is ram"
// let output = input(input1)

// console.log(output)



// let input = (string) => {
//     return string.replace(/\b\w/g, (word) => word.toUpperCase())
// }

// let result = input("what is your name ?")
// console.log(result)

// let name = (string) =>{
//     return string.replace("hari", "shyam".replace(/\b\w/g, (word) => word.toUpperCase()))
// }

// console.log(name("hari is my name"))


