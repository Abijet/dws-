

let fun1 = (a=3, b=2, c=3) =>{
    // console.log(a, b, c);
    console.log(a);
    console.log(b);
    console.log(c);
}
fun1(1)

// #################################     array destruction     ####################### 
let [a=33, b=44, c=55] = [1,2]

// console.log(a,b,c);
console.log(a);
console.log(b);
console.log(c);


// ###########################     object destruction     ############################ 

let {name= "hari", age= 29, isMarried= true} = {name: "nitan", isMarried: false}

console.log("name:", name);
console.log("age:", age);
console.log("isMarried:", isMarried);