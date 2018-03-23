export class Product {
    private _id         : number;
    private _name       : string;
    private _image      : string;
    private _sumary     : string;
    private _price      : number;
    private _canBuy     : boolean;

    constructor(id : number, name : string, image : string, sumary : string, price : number, canBuy : boolean) {
        this._id         = id;
        this._name       = name;
        this._image      = image;
        this._price      = price;
        this._sumary     = sumary;
        this._price      = price;
        this._canBuy     = canBuy;
    }
    
    public get id() : number {
        return this._id;
    }
    
    public set id(val : number) {
        this._id = val;
    }

    public get name() : string {
        return this._name;
    }
    
    public set name(val : string) {
        this._name = val;
    }

    public get image() : string {
        return this._image;
    }
    
    public set image(val : string) {
        this._image = val;
    }    

    public get sumary() : string {
        return this._sumary;
    }
    
    public set sumary(val : string) {
        this._sumary = val;
    }

    public get price() : number {
        return this._price;
    }
    
    public set price(val : number) {
        this._price = val;
    }

    public get canBuy() : boolean {
        return this._canBuy;
    }
    
    public set canBuy(val : boolean) {
        this._canBuy = val;
    }
}