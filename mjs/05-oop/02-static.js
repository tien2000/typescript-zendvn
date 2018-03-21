var TaskState;
(function (TaskState) {
    TaskState[TaskState["Created"] = 100] = "Created";
    TaskState[TaskState["Active"] = 101] = "Active";
    TaskState[TaskState["InActive"] = 102] = "InActive";
    TaskState[TaskState["Process"] = 103] = "Process";
    TaskState[TaskState["Finish"] = 104] = "Finish";
})(TaskState || (TaskState = {}));
class TaskService {
    constructor(tasks) {
        TaskService.tasks = tasks;
    }
    getItems() {
        return TaskService.tasks;
    }
    static showItemsInfo() {
        // NeoTien - HTML
        // NeoTien - CSS
        // NeoTien - JS
        for (const task of TaskService.tasks) {
            console.log(`${TaskService.username} - ${task.name}`);
        }
    }
}
TaskService.username = "NeoTien";
let task1 = { id: 1, name: "HTML" };
let task2 = { id: 2, name: "CSS" };
let tasks = [
    task1,
    task2,
    { id: 3, name: "JS", state: TaskState.Finish }
];
let taskServiceObj = new TaskService(tasks);
console.log(taskServiceObj.getItems());
console.log(TaskService.username);
TaskService.showItemsInfo();
