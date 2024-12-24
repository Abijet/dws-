
try {
    console.log("I am try block");
    let Err = new Error("This is an error")
    throw Err;
    console.log("raj");
}
catch (error){
    console.log("I am catch block");
    console.log(error.message);
}
finally{
    console.log("I am finally block");
}