// class Course {
//     public id           : string;
//     private name        : string;
//     protected price     : number;

//     constructor(id : string, name : string, price : number) {
//         this.id     = id;
//         this.name   = name;
//         this.price  = price;
//     }

//     showSourseInfo() : void{
//         console.log(`${this.id} - ${this.name} - ${this.price}`);        
//     }
// }

// class CourseMobile extends Course{
//     author  : string;

//     constructor(id : string, name : string, price : number, author : string){
//         super(id, name, price);        
//         this.author = author;
//     }

//     checkProperty(){
//         console.log(this.price);
//     }
// }

// let courseObj = new Course("001", "ES6", 1000);
// console.log(courseObj.id);
// let courseMobileObj = new CourseMobile("002", "TypeScript", 2000, "ZendVN");
// console.log(courseMobileObj.id);
// courseMobileObj.checkProperty();

// /*
//                     Inside     Outside    Child Class
//     puclic          +           +           +
//     private         +           -           -
//     protected       +           -           +
// */