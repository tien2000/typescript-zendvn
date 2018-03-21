enum TaskState{
    Created = 100,
    Active,
    InActive,
    Process,
    Finish
}

interface TaskInterface {
    id      : number;
    name    : string;
    state?  : TaskState;
}

class TaskService {
    public static username : string = "NeoTien";

    static tasks       : TaskInterface[];

    constructor(tasks : TaskInterface[]) {
        TaskService.tasks = tasks;
    }

    getItems(){
        return TaskService.tasks;
    }

    static showItemsInfo() : void{
        // NeoTien - HTML
        // NeoTien - CSS
        // NeoTien - JS

        for (const task of TaskService.tasks) {
            console.log(`${TaskService.username} - ${task.name}`);
        }
    }
}

let task1 : TaskInterface = { id  : 1, name : "HTML" };
let task2 : TaskInterface = { id  : 2, name : "CSS" };

let tasks : TaskInterface[] = [
    task1,
    task2,
    { id  : 3, name : "JS", state : TaskState.Finish }
];

let taskServiceObj = new TaskService(tasks);

console.log(taskServiceObj.getItems());
console.log(TaskService.username);

TaskService.showItemsInfo();

