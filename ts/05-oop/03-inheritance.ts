// class Course {
//     id      : string;
//     name    : string;
//     price   : number;

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

//     showSourseInfo(){
//         super.showSourseInfo();
//         console.log(`${this.author}`);        
//     }
// }

// var courseObj = new Course("001", "ES6", 100000);
// courseObj.showSourseInfo();

// var courseMObileObj = new CourseMobile("002", "TypeScript",200000 ,"ZendVN");
// courseMObileObj.showSourseInfo();