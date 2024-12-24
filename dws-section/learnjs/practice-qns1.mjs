// make a arrow function that take input as array and return , output in ascneding order


// let input = (num) =>{
//     return num.sort()
// }
// let _input = input([1,2,5,6,7,8,4])
// console.log(_input)

// make a arrow function that take input as array and return , output in desending order

// let input = (num) =>{
//     return num.sort().reverse()
// }
// let _input = input([1,2,5,6,3,7,8,4])
// console.log(_input)

// make a arrow function that take input as [1,2,3] and return [1,8,3] here ar[1] is changed from 2 to 8

// let input = (num) =>{
//     let numAgain = num [1] = 8 
//     return num
// }

// let _input = input([1,2,3])
// console.log(_input)

// make a arrow function which takes input as [1,2,3] and produce output as "1,2,3"


// let input = (num) =>{
//     return num.join(",")
// }

// let _input =input([1,2,3])
// console.log(_input)

// make a arrow function that take input as [1,2,3] , and return [1,2,3,4] by using push method

// let input = (num) => {
//     let num2 = num.push(4)
//     return num
// }
// let _input = input([1,2,3])
// console.log(_input)

// make a arrow function that takes input as array of number and return the third largest number


// let input = (num) => {
//    num.sort((a,b) => a-b)
    
//     return num[num.length - 3]

// }
// let num = [1, 20, 34, 14]
// let _input = input(num)
// console.log(_input)

// ###########################   [1,2,3] => [3,6,9]    #################

// let input = (num) =>{
//     let arr = num.map((value, i) =>{
//         return value*3
//     })
//     return arr
// }

// let _input = input([1,2,3])
// console.log(_input)

// ###########################   [1,2,3]=>[11,12,13]  ###############

// let input = (num) => {
//     let arr = num.map((value, i) => {
//         return ("1") + value
//     })
//     return arr
// }

// let _input = input([1,2,3])
// console.log(_input)
 

// ##############################  ["my","name","is"] => ["MY","NAME","IS"]   #############################

// let input = (char) =>{
//     let arr = char.map((value, i) =>{
//         return value.toUpperCase()
//     })
//     return arr
// }
// let _input = input(["my","name","is"])
// console.log(_input)


// ###########################    ["my","name","is"] => ["MYN","NAMEN","ISN"]    ######################

// let input = (char) =>{
//     let arr = char.map((value, i) => {
//         return value.toUpperCase() + ("n".toUpperCase())
//     })
//     return arr
// } 

// let _input = input(["my","name","is"])
// console.log(_input)


// #################################    "my name is nitan" => "MYN NAMEN ISN NITANN"     ################################


// let input = (char) => {
//     let arr= char.toUpperCase().split(" ")
//     // console.log(arr)
//     let ar1 = arr.join("N ")
//     return ar1
// }

// let _input = input("my name is nitan")
// console.log(_input)

// "nitan"=> "Nitan"

// let input = (word) =>{
    
//         return word[0].toUpperCase() + word.slice(1)
// }
// let _input = input("nitan")
// console.log(_input)

// ["my","name","is"] => ["My","Name","Is"]

// let input = (character) =>{
//     let capital = character.map((value, i) => {
//        return value[0].toUpperCase() + value.slice(1) 
        
//     })
//     return capital
// }
// let _input = input(["my", "name", "is", "nitan"])
// console.log(_input);

// "my name is nitan" => "My Name Is Nitan"

// let input = (character) =>{
//     let capital = character.map((value, i) => {
//        return value[0].toUpperCase() + value.slice(1)
        
//     })
//     return capital.join(' ')
// }
// let _input = input(["my", "name", "is", "nitan"])
// console.log(_input); // My Name Is Nitan




// let voters = [
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// let input = voters.filter((value, i) => {
//   if (value.voted === true) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(input);