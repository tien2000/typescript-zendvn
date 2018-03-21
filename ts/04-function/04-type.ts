function userInfo01(name : string, age : number) :string {
    return `My name is ${name} , age: ${age}`;
}

let userInfo02 = function (name : string, age : number) :string {
    return `My name is ${name} , age: ${age}`;
}

let userInfo03: (name : string, age : number) => string = function(name, age){
    return `My name is ${name} , age: ${age}`;
}

console.log(userInfo01("NeoTien", 28));
console.log(userInfo02("TienLS", 18));
console.log(userInfo03("Neo", 8));
