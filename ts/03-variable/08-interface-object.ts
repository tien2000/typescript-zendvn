let objOne: any = {};
console.log(objOne);

// ====================================
interface CourseInterface{
    name        : string,
    time        : string,
    free?       : boolean       // ? : Có hay ko cũng được.
}

let objTwo: CourseInterface;
objTwo = {
    name        : "ES6",
    time        : "5h"
};

let objThree: CourseInterface;
objThree = {
    name        : "TypeScript",
    time        : "75h",
    free        : false
};

console.log(objTwo);
console.log(objThree);

