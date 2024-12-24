// import age,{name} from "./a.mjs"

// console.log(name)
// console.log(age)
// console.log(address)

import details from "./a.mjs";

let mapping = details.map((value, i)=>{
    return (value.name)
})

console.log(mapping)