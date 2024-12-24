// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// let input = (num) =>{
//     let filter = num.filter((value) =>{
//         if (value>=5) {
//             return true
//         } else {
//           return false  
//         }
//     })
//     return filter
// }
// let _input = input([1,3,10,23,54])
// console.log(_input)

// Given an array of numbers, return a new array that only includes the even numbers.


// let input = (num) => {
//     let filters = num.filter((value) =>{
//         if (value % 2 === 0) {
//             return true
//         } else {
//             return false
//         }
//     })
//     return filters
// }

// let _input = input([1,3,4,5,6,10,19,28])
// console.log(_input)

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length


// let input = (char) =>{
//     let filters = char.filter((value) =>{
//         return value.length <= 5
//     })
//     return filters
// }

// let _input = input(["ram", "michal","Kanye", "j-cole"])
// console.log(_input)



// Make a filtered list of all the people who are old enough to see The Matrix (older than 18)


// let input = (people) =>{
//     let filters = people.filter((person) =>{
//         return person.age > 18
//     })
//     return filters
// }
// let _input = input([
//     { name: "John", age: 25 },
//     { name: "Jane", age: 18 },
//     { name: "Bob", age: 30 },
//     { name: "Alice", age: 20 },
//     { name: "Mary", age: 35 },
// ]
// )
// console.log(_input)


// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// let input = (people) =>{
//     let filter = people.filter((person) => {
//         return person.member === true
//     })
//     return filter
// }
// let _input = input(
//     [
//         { name: "Jacky Chane", member: true },
//         { name: "Raj Bhandari", member: false },
//         { name: "John Sharma", member: true },
//         { name: "Kayne West", member: false },
//         { name: "Suraj Karki", member: true }
//     ]
// )
// console.log(_input)

//  Execute if the character in string is even otherwise return false.

// let input = (string) =>{
//     let filters = string.filter((value) =>{
//         if (value.length % 2 === 0) {
//             return true
//         } else {
//             return false
//         }
//     })
//     return filters
// }

// let _input = input(["ram", "hari", "joe", "harry", "brad"])
// console.log(_input)



//  Turn an array of voter objects into a count of how many people voted

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

let input = voters.filter((value, i) =>{
  return value.voted
}).length
let _input = input
console.log(_input);