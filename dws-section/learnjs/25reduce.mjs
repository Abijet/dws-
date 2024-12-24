// let input = [1,2,3]

// let output = input.reduce((pre, cur) =>{
//     return pre + cur 
// },0)//1//3//6

// console.log(output);

// let input = [1,2,3]

// let output = input.reduce((pre, cur) =>{
//     return pre * cur 
// },0)

// console.log(output);

let input = (num) =>{
    let numFilter = num.filter((value) =>{
        if (value % 2 === 0) {
            return true
        } else {
            return false
        }   
        
    })
    // return numFilter
    let numReduce = numFilter.reduce((pre, cru) => {

        return pre + cru
    })
    return numReduce
}

let _input = input([3,2,5,9,10])
console.log(_input);



