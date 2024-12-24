// let cleanName =  (string) =>{
//     let input = string.map((value, i) =>{
//         return value.trim()
//     })
//     return input
// }

// let _input = cleanName(["   ram", "shyam   "])
// console.log(_input)


// question no: 2 JavaScript: Check two given numbers and return true if one of the number is 50 or if their sum is 50

// let input = (num1, num2) =>{
//     if (num1 === 50 || num2 === 50) {
//         return true
//     } else if(num1 + num2 === 50) {
//         return true
//     }else{
//         return false
//     }
// }
// let _input = input(10+40)
// console.log(_input);

// question no: 3 JavaScript: Create a new string adding "Py" in front of a given string


// let input = (char) =>{
//     if (char === null || char === undefined || char.substring(0,2) === "py") {
//         return char
//     } else {
//         return "py" + char
        
//     }
// }
// let _input = input("pynnn")
// console.log(_input);

// question no: 4

// let input = (char, remov) =>{
//     let str1 = char.substring(0, remov)
//     let str2 = char.substring(remov + 1, char.length)
//     return(str1 + str2)
// }
// let _input = input("abc", 0)
// console.log(_input);




// let word ="madam"

// let output = () =>{
//     let input = word.split('').reverse().join('')

//     if (input === word) {
//         return true
//     } else {
//         return false
//     }
// }
// let _output = output()
// console.log(_output)


// let name = ["ram", "shyam", "hari"]

// let nameFilter= name.filter((value) =>{
//     return value.length > 3
// })
// console.log(nameFilter)

// let nameMap= nameFilter.map((acc) =>{
//     return `${acc} is my friend`
// })
// console.log(nameMap)


// let name =["my","name","is"]

// let arr1 = name.map((value) =>{
//    let words = value.split('')
//    words[0] = words[0].toUpperCase()
//    return words.join('')
// })
// console.log(arr1)


// let name ="my name is nitan"
// let name1= name.split(' ')
// console.log(name1)

// let arr1 = name1.map((value) =>{
//    let words = value.split('')
//    words[0] = words[0].toUpperCase()
//    return words.join('')
// })
// console.log(arr1)
// let arr2 = arr1.join(" ")
// console.log(arr2)


// let name = "nitan"
// let name2 = name.split(' ')

// let arr = name2.map((value) => {
//     let ar2= value.split('')
//     console.log(ar2)
//     ar2[0] = ar2[0].toUpperCase()
//     return ar2.join('')
    
// })
// console.log(arr)
// let ar3 = arr.join(' ')
// console.log(ar3)


// let name = "ram"

// let obj1 = {id:name,
//     age: 29,}
    

// let obj2 = {name,
// age: 29,}

// console.log(name)
// console.log(obj1)
// console.log(obj2)


