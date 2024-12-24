// let person = {}


// const car = () => {
//    return { make: "Toyota", model: "Camry" }
// };

// console.log(car());

// let book = (info) => {
//     return `${info.title} ${info.author} `
//     // return info
// }
// let _book = book({title: "The 48 Laws Of Power", author: "Robert Greene"})
// console.log(_book);



// let rectangle = (height, width, area) => {
//      area= height * width
//     return area
// }
// let _rectangle = rectangle(3,4,)
// console.log(_rectangle);

// let user = (name, age) =>{
//     return `name:${name} age: ${age}`
// }

// console.log(user("ram" ,23));

// let product = {
//     name: "tea",
//     price :100,
//     getDescription: () =>{
//         return `this is ${product.name} cost ${product.price}`
//     },
// };
// console.log(product.getDescription());

// let circle = {
//     radius: 5,
//     circumference: (radius) => {
//         return 3.14*circle.radius*circle.radius
//     }
// }
// console.log(circle.circumference());

// let team = {
//     name: "blue team",
//     players: [],
//     addPlayer: (player) =>{
//         return team.players.push(player)
//     },
// }
// team.addPlayer("john")
// team.addPlayer("ram")
// console.log(team.players);

// let calculator = {
//     add: (num1, num2) =>{
//         return num1+num2
//     },
//     subtract: (num1, num2) =>{
//         return num1-num2
//     },
    
// }
// console.log(calculator.add(2,4));
// console.log(calculator.subtract(4, 2));



// let timer = {
//     seconds: 0,
//     start: (seconds) => {
//       setInterval(() => {
//         return timer.seconds++;
//       }, 1000);
//     }
//   };
  
//   timer.start();
//   console.log(timer.seconds);


// let student = {
//     name: "ram sharma",
//     age: 18,
//     grade: [],
//     addGrade: (num) =>{
//         return student.grade.push(num)
//     },
// }
// student.addGrade(12)
// console.log(student);

// let backAccount = {
//     balance: 1000,
//     deposit: (num, amount) =>{
//          amount = backAccount.balance + num
//          return amount
//     }
// }
// console.log(backAccount.deposit(12));


// let playlist = {
//     name: [],
//     songs: (song) =>{
//         return playlist.name.push(song)
//     } 
// }
// playlist.songs("see you again")
// playlist.songs("bad thing")
// console.log(playlist.name);



// let weather = {
//     temperature: 25,
//     convert: (celsius) =>{
//         let fahren = (celsius * 9/5) + 32
//         return fahren
//     }
// }
// let fahrentemp = weather.convert(weather.temperature) 
// console.log(fahrentemp);

// let inventory = {
//     items: [],
//     addItem: (item, quantity) =>{
//         return inventory.items.push(item, quantity)
//     }
// }
// inventory.addItem('shoes', 20)
// console.log(inventory);

// let counter ={
//     count: 0,
//     increment: () =>{
//         return ++counter.count
//     }
// }
// counter.increment()
// console.log(counter);

// let productCatalog ={
//     products: [],
//     addProduct: (name, price) =>{
//         return productCatalog.products.push(`the name of the product is ${name} it's price is ${price}`)
//     }
// }
// productCatalog.addProduct("nike shoe", 2000)
// console.log(productCatalog.products);

// let arr = (num) =>{
//     let input = num.reduce((acc, curr) =>{
//         return acc + curr
         
//     },0)
//     return input
// } 

// let _arr = arr([1,2,3,4])
// console.log(_arr);

// let input = (char) =>{
//     let string = char.reduce((acc, curr)=>{
//         return acc + curr
//     },'')
//     return string
// }
// let _input = input(["hari","sharma"])
// console.log(_input);

// let input = (num) =>{
//     let impNum = num.reduce((acc, curr) => {
//         if (acc > curr) {
//             return acc
//         } else{
//             return curr
//         }
//     },0)
//     return impNum
// }
// let _input = input([1,3,5,6,9])
// console.log(_input);

// let input = (num) =>{
//     let impNum = num.reduce((acc, curr) => {
//         let add = acc + curr
//         return add/ num.length
//     },0)
//     return impNum
// }
// let _input = input([10,30,50,20,40])
// console.log(_input);

let input = (num) =>{
    let impNum = num.reduce((acc, curr) => {
        if (curr.category === 'A' ) {
             acc.push(curr)
        }
        return acc
    },[])
    return impNum
}
let _input = input( [
    { category: 'A', value: 10 },
    { category: 'B', value: 20 },
    { category: 'A', value: 15 },
    { category: 'C', value: 25 }
])
console.log(_input);
