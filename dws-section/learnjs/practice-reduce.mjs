// const numbers = [102, 91, 3, -6, 203, 8, 33, 21, 150, 77, 61, 3, 91, 21, 8];

// const lowest = numbers.reduce((accu, curr)=>{
//     if (curr>accu) {
//         return curr
//     }
//     return accu
// })
// console.log(lowest)

// ##############################################################################################################


// let input= [5, 1, 2, 5, 1, 2]

// let dublicate = input.reduce((accu, curr)=>{
//     if(accu.indexOf(curr) === -1){
//         accu.push(curr)
//     }
//     return accu
   
// },[])
// console.log(dublicate)


// ##############################################################################################################



// const todos = [
//     {
//       "userId": 10,
//       "id": 1,
//       "title": "delectus aut autem",
//       "completed": false
//     }, {
//       "userId": 7,
//       "id": 2,
//       "title": "quis ut nam facilis et officia qui",
//       "completed": true
//     }, {
//       "userId": 1,
//       "id": 3,
//       "title": "fugiat veniam minus",
//       "completed": false
//     }, {
//       "userId": 2,
//       "id": 4,
//       "title": "et porro tempora",
//       "completed": true
//     }, {
//       "userId": 2,
//       "id": 5,
//       "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//       "completed": false
//     }, {
//       "userId": 1,
//       "id": 6,
//       "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//       "completed": false
//     }, {
//       "userId": 31,
//       "id": 7,
//       "title": "illo expedita consequatur quia in",
//       "completed": false
//     }, {
//       "userId": 90,
//       "id": 8,
//       "title": "quo adipisci enim quam ut ab",
//       "completed": true
//     }, {
//       "userId": 90,
//       "id": 9,
//       "title": "molestiae perspiciatis ipsa",
//       "completed": false
//     }
//   ];


//   let completedTodos = todos.reduce((accu, curr)=>{
//     if(curr.completed){
//         accu++
//     }
//     return accu
//   },0)

//   console.log(completedTodos)


// ##############################################################################################################



// const todos = [
//   {
//     "userId": 10,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
//   }, {
//     "userId": 7,
//     "id": 2,
//     "title": "quis ut nam facilis et officia qui",
//     "completed": true
//   }, {
//     "userId": 1,
//     "id": 3,
//     "title": "fugiat veniam minus",
//     "completed": false
//   }, {
//     "userId": 2,
//     "id": 4,
//     "title": "et porro tempora",
//     "completed": true
//   }, {
//     "userId": 2,
//     "id": 5,
//     "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
//     "completed": false
//   }, {
//     "userId": 1,
//     "id": 6,
//     "title": "qui ullam ratione quibusdam voluptatem quia omnis",
//     "completed": false
//   }, {
//     "userId": 31,
//     "id": 7,
//     "title": "illo expedita consequatur quia in",
//     "completed": false
//   }, {
//     "userId": 90,
//     "id": 8,
//     "title": "quo adipisci enim quam ut ab",
//     "completed": true
//   }, {
//     "userId": 90,
//     "id": 9,
//     "title": "molestiae perspiciatis ipsa",
//     "completed": false
//   }
// ];

// let solution = todos.reduce((accu, curr)=>{
//   if(!accu[curr.userId]){
//   accu[curr.userId] = 0
//   }
//   accu[curr.userId] +=1
//   return accu
// },{})
// console.log(solution)



// ##############################################################################################################


// const nestedArray = [[1, 2], [3, 4], [5, 6]];

// let flatArray = nestedArray.reduce((acc, curr)=>{
//   return [...acc,...curr];
// },[])
// console.log('flat array', flatArray);

// ##############################################################################################################


// const numbers = [10, 15, 20, 25];

// let sum = numbers.reduce((acc,curr)=>{
//   return (acc+curr)
// })

// console.log(sum)

// let average = sum/numbers.length
// console.log(average)



// ##############################################################################################################


// const numbers = [1, 2, 3, 2, 4, 2, 5];

// let count = numbers.reduce((acc, curr)=>{
//   return(curr === 2? acc+1 : acc)
// },0)

// console.log(count)


// ##############################################################################################################


// const numbers = [1, 2, 2, 3, 4, 4, 5];

// let dublicateArray = numbers.reduce((acc, curr)=>{
//   if (!acc.includes(curr)) {
//     acc.push(curr)
//   }
//   return acc
// },[])
// console.log(dublicateArray)

// ##############################################################################################################


// const words = ['Hello', ' ', 'World', '!'];

// let joinString = words.reduce((acc, curr)=>{
//   return(acc+curr)
// },'')

// console.log(joinString)


// ##############################################################################################################


const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let countFruits = fruits.reduce((acc,curr)=>{
  if (!acc[curr]) {
    acc[curr] = 0
  }
  acc[curr] ++
return acc

},{})
console.log(countFruits)