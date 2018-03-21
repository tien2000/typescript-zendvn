class Course {
    private _name        : string;

    constructor(name : string) {
        this._name   = name;
    }

    showCourseInfo() : void{
        console.log(`${this._name}`);        
    }
    
    public get name() : string {
        return this._name;
    }

    public set name(val : string) {
        this._name = val;
    }
}

let courseObj = new Course("ES6");
console.log(courseObj);

console.log("Name: " + courseObj.name);

courseObj.name = "TypeScript";
console.log("Name: " + courseObj.name);
