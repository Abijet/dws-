// let fun = (a, b, ...c) =>{

//     //  a= 1
//     //  b= 2
//     //  c= [3,4,5]

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// fun(1,2,3,4,5)

// #################################     array destruction     ####################### 

// let [x,y,...z] = [1,2,3,4,5]

// console.log(x);
// console.log(y);
// console.log(z);

// ###########################     object destruction     ############################ 

let {name, ...info} = {name:"nitan", age: 29, isMarried: false, address: "ktm"}
console.log(name);
console.log(info);