



// let fun = (info) => {
//     return `my name is ${info.name} i am ${info.age}`
// }
// let _input = fun({name: "raj", age: 29})
// console.log(_input);


// let detail = (info) => {
//     return `My name is ${info.name}, I age is ${info.age}, I live in ${info.country}`
// }
// let _detail = detail({name: "ram", age: 34, country: "nepal"})
// console.log(_detail);


//  

// let arr1 = [1,2,3]
// let arr2 = [2,3]


// let ans = arr1.flatMap((value1, i1)=>{
//    return arr2.map((value2, i2)=>{
//        return value1 * value2
//     })
// })
// console.log(ans)


let findMax =(arr)=> {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  let arr = [1, 2, 3, 5, 4];
let _res = findMax(arr)
console.log(_res)




