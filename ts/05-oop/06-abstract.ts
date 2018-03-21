abstract class Laptop {    
    constructor() {
        
    }

    public keyboard(): void{
        console.log("Laptop.keyboard");        
    }

    public abstract mainboard(hp : string): string;

    public mouse(): void{
        console.log("Laptop.mouse");        
    }
}

class LaptopHP extends Laptop{
    public keyboard(): void{
        console.log("Overright!!!");        
    }

    public mainboard(): string{
        console.log("abstract method");        
        return "abstract method";
    }
}

let laptopObj : Laptop = new LaptopHP();
laptopObj.keyboard();
laptopObj.mainboard("");
laptopObj.mouse();