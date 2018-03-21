interface People{
    name        : string;
    eat()       : void;
    sleep()     : void;
    love()      : void;
}

interface Bird{
    fly()       : void;
}

class Javis{
    caculate(x : number, y : number) : number{
        return x + y;
    }
}

class IronMan extends Javis implements People, Bird{
    name        : string;

    constructor(name : string){
        super();
        this.name = name;
    }

    eat()       : void{
        console.log("eat");
    }

    sleep()     : void{
        console.log("sleep");
    }

    love()      : void{
        console.log("make love, not war");
    }

    fly()       : void{
        console.log("fly");
    }
}

let tony: IronMan = new IronMan("Tony");
tony.eat();
tony.sleep();
tony.fly();
console.log(tony.caculate(2, 3));