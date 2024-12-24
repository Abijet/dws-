// let input = 

// let arr = (input) =>{
//     let numFilter = input.filter((value) =>{
//         if (value < 0) {
//             return false
//         } else {
//             return true
            
//         }
//     })
//     // return numFilter
//     let numReduce = numFilter.reduce((acc, curr) =>{
//         acc = acc + curr
//         return acc
//     })
//     return numReduce
// }
// let _input =arr([1, -4, 12, 0, -3, 29, -150])
// console.log(_input)


// let input = (num) =>{
//     let arr = num.reduce((prv, crr) =>{
//         prv = prv + crr
//         return prv
//     })
//     return arr
// }

// let _input = input([1,2,3])
// console.log(_input);


// let input = (num) =>{
//     let arr = num.reduce((prv, crr) =>{
//       return prv + crr

//     },"")
//     return arr
// }

// let _input = input([1,2,3])
// console.log(_input);

// Turn an array of voter objects into a count of how many people voted

// var voters = [
//     {name:'Bob' , age: 30, voted: true},
//     {name:'Jake' , age: 32, voted: true},
//     {name:'Kate' , age: 25, voted: false},
//     {name:'Sam' , age: 20, voted: false},
//     {name:'Phil' , age: 21, voted: true},
//     {name:'Ed' , age:55, voted:true},
//     {name:'Tami' , age: 54, voted:true},
//     {name: 'Mary', age: 31, voted: false},
//     {name: 'Becky', age: 43, voted: false},
//     {name: 'Joey', age: 41, voted: true},
//     {name: 'Jeff', age: 30, voted: true},
//     {name: 'Zack', age: 19, voted: false}
// ];

// let input = voters.reduce((acc, crr) =>{
//   return acc + crr.voted
// },0)
// let _input = input
// console.log(_input);



// let input = (voters) =>{
//   let box = {
//     votedBox: [],
//     nonVotedBox : []
//   }
//   let filter = voters.reduce((acc, curr) =>{
//     if (curr.voted === true) {
//       acc.votedBox.push(curr)
//     } else {
//       acc.nonVotedBox.push(curr)
//     }
//     return acc
//   },box)
//   return filter
// }

// let _input= input(([
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ]))
// console.log(_input);


// let func = (fruit) => {
//     let input = fruit.reduce((acc, curr) => {
//         acc[curr] = (acc[curr] || 0) + 1
//         return acc
//     }, {})
//     return input
// }

// let _func = func((["apple", "banana", "apple", "orange", "banana", "apple"]))
// console.log(_func);

// Output: { apple: 3, banana: 2, orange: 1 }


// let arr= (char) =>{
//     let input = char.reduce((pv, curr) => {
//         if (curr.length > pv.length) {
//             return curr
//         } else {
//             return pv
//         }
        
//     }, " ")
//     return input
// }

// let _arr = arr((["banana", "mango", "orangeee" ]))
// console.log(_arr);




// let arr= (char) =>{
//     let input = char.reduce((pv, curr) => {
//         return pv + curr.price
//     },0)
//     return input
// }
// let _arr = arr(( [
//     { name: "Apple", price: 0.5 },
//     { name: "Banana", price: 0.25 },
//     { name: "Orange", price: 0.75 }
//   ]))
//   console.log(_arr);


// const words = [[1,2] ,[3,4], [5,6],[7,8]];

// let input = words.reduce((pv, curr) =>{
//    return pv.concat(curr)
// }," ")
// console.log(input);



   
// let func = (people) => {
//     let ages ={
//         thirty: [],
//         twenty: [],
//     }
//     let input = people.reduce((pv, curr) => {
//         console.log(pv);
//         console.log(curr);
   
//         if (curr.age > 29 ) {
//             pv.thirty.push(curr)
//         } else {
//             pv.twenty.push(curr)
//         }
//         return pv
        
//     },ages)
//     return input
// }

// let _func = func(([
//     { name: 'Alice', age: 30 },
//     { name: 'Bob', age: 25 },
//     { name: 'Charlie', age: 30 },
//   ]))
//   console.log(_func);
  


// const items = [
//     { name: 'Apple', price: 2 },
//     { name: 'Banana', price: 3 },
//     { name: 'Orange', price: 1.5 },
//   ];

//   let input = items.reduce((pv, curr) => {
//     console.log(pv);
//     // console.log(curr);
//     if (curr.price>pv.price) {
//         return pv
//     } else {
//         return curr

//     }
//   }, 0)

//   console.log(input);




// const numbers = [4, 8, 12, 16, 20];

// let input = numbers.reduce((pv, curr) => {
//     if (pv && curr % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// },true)

// console.log(input);