// enum TaskState{
//     Created = 100,
//     Active,
//     InActive,
//     Process,
//     Finish
// }
// interface TaskInterface {
//     id      : number;
//     name    : string;
//     state?  : TaskState;
// }
// class TaskService {
//     tasks       : TaskInterface[];
//     constructor(tasks : TaskInterface[]) {
//         this.tasks = tasks;
//     }
//     getItems(){
//         return this.tasks;
//     }
// }
// let task1 : TaskInterface = { id  : 1, name : "HTML" };
// let task2 : TaskInterface = { id  : 2, name : "CSS" };
// let tasks : TaskInterface[] = [
//     task1,
//     task2,
//     { id  : 3, name : "JS", state : TaskState.Finish }
// ];
// let taskServiceObj = new TaskService(tasks);
// console.log(taskServiceObj.getItems());
