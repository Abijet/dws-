let detail = 0||"" || false || "hari"

console.log(detail);

// || can be used to initilize the variable

//    =>  During initilization first it looks for first value if the value is truthy value it returns the truthy value else it will search next truthy value

//    =>  If all are falsy value it returns last falsy value

let detail2 = 0||"" || false || undefined

console.log(detail2);