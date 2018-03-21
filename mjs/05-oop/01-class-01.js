class Task {
    constructor(id, name, state) {
        this.id = id;
        this.name = name;
        this.state = state;
    }
    showTaskInfo() {
        console.log(`${this.id} - ${this.name} - ${this.state}`);
    }
}
let taskObj1 = new Task(1, "Learning", "CreateClass");
taskObj1.showTaskInfo();
console.log(taskObj1);
