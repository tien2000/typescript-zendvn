class Laptop {
    constructor() {
    }
    keyboard() {
        console.log("Laptop.keyboard");
    }
    mouse() {
        console.log("Laptop.mouse");
    }
}
class LaptopHP extends Laptop {
    keyboard() {
        console.log("Overright!!!");
    }
    mainboard() {
        console.log("abstract method");
        return "abstract method";
    }
}
let laptopObj = new LaptopHP();
laptopObj.keyboard();
laptopObj.mainboard("");
laptopObj.mouse();
