// let ar1 = [
//     {
//       name: "nitan",
//       gender: "male",
//     },
//     {
//       name: "sita",
//       gender: "female",
//     },
//     {
//       name: "hari",
//       gender: "male",
//     },
//     {
//       name: "gita",
//       gender: "female",
//     },
//     {
//       name: "utshab",
//       gender: "other",
//     },
//   ];

//   let result = {
//     male: [],
//     female: [],
//     other: [],
//     };

//   let output = ar1.reduce((acc, curr) =>{
//     if (curr.gender === "male") {
//       acc.male.push(curr)
    // } else if(curr.gender === "female"){
    //   acc.female.push(curr)
//     } else{
//       acc.other.push(curr)
//     }
//     return acc
//   }, result)

// console.log(output);



// let input = (ar1) => {
//   let result ={
//     male: [],
//     female: [],
//     other: [],  
//   }


// let output = ar1.reduce((arr, curr) => {
//   if (curr.gender === "male") {
//     arr.male.push(curr)
//   } else if(curr.gender === "female") {
//     arr.female.push(curr)
//   } else{
//     arr.other.push(curr)
//   }
//   return arr;
// },result)
// return output
// }

// let _arr = input(([
//   {
//     name: "nitan",
//     gender: "male",
//   },
//   {
//     name: "sita",
//     gender: "female",
//   },
//   {
//     name: "hari",
//     gender: "male",
//   },
//   {
//     name: "gita",
//     gender: "female",
//   },
//   {
//     name: "utshab",
//     gender: "other",
//   },
// ]))
// console.log(_arr);







//   let output = ar1.reduce((result, person) => {
//   if (!result[person.gender]) {
//     result[person.gender] = [];
//   }

//   result[person.gender].push({
//     name: person.name,
//     gender: person.gender
//   });

//   return result;
// }, {});

// console.log(output);








