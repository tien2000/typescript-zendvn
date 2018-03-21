class Course {
    constructor(name) {
        this._name = name;
    }
    showCourseInfo() {
        console.log(`${this._name}`);
    }
    get name() {
        return this._name;
    }
    set name(val) {
        this._name = val;
    }
}
let courseObj = new Course("ES6");
console.log(courseObj);
console.log("Name: " + courseObj.name);
courseObj.name = "TypeScript";
console.log("Name: " + courseObj.name);
