class Javis {
    caculate(x, y) {
        return x + y;
    }
}
class IronMan extends Javis {
    constructor(name) {
        super();
        this.name = name;
    }
    eat() {
        console.log("eat");
    }
    sleep() {
        console.log("sleep");
    }
    love() {
        console.log("make love, not war");
    }
    fly() {
        console.log("fly");
    }
}
let tony = new IronMan("Tony");
tony.eat();
tony.sleep();
tony.fly();
console.log(tony.caculate(2, 3));
