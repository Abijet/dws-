let info ={
    name: "nitan",
    age: 1,
    isMarried: false,
    list: ["apple", "mango", "banana"],
    product: {price: 1000, color: "red"},
    sum: (a, b) => {
        return a +b;
    },
}
console.log(info)
console.log(info.name)
console.log(info.age)
console.log(info.isMarried)
console.log(info.list)
console.log(info.product)
console.log(info.sum(2, 3))