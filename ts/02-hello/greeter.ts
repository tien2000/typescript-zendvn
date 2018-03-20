function greeter(person: string = "abc", age? : number) {
    return "Hello, " + person;
}

let user = "NeoTien 123";

document.body.innerHTML = greeter(user);

// Comment