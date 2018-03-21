// Đầy đủ tham số.
function userInfo1(name : string, age : number) : string {
    return `My name is ${name}, age: ${age}`;
}

// Giá trị mặc định cho các  tham số.
function userInfo2(name : string = "Neo", age : number = 69) : string {
    return `My name is ${name}, age: ${age}`;
}

// Tham số khuyết
function userInfo3(name : string = "Neo", age? : number) : string {
    if (age == null) {
        return `My name is ${name}`;
    } else {
        return `My name is ${name}, age: ${age}`;
    }
}

console.log(userInfo1("TienLS", 28));
console.log(userInfo2());
console.log(userInfo3("Tien", 69));
 