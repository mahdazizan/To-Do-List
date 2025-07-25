var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var Todolist = /** @class */ (function () {
    function Todolist() {
        this.tasks = [];
        this.nextid = 1;
    }
    Todolist.prototype.getTasks = function () {
        return __spreadArray([], this.tasks, true);
    };
    Todolist.prototype.addTask = function (title) {
        var newTask = {
            id: this.nextid++,
            title: title,
            completed: false
        };
        this.tasks.push(newTask);
        return newTask;
    };
    Todolist.prototype.filterTasks = function (filter) {
        return this.tasks.filter(function (task) {
            if (filter.id !== undefined && task.id !== filter.id)
                return false;
            if (filter.title !== undefined && task.title.includes(filter.title))
                return false;
            if (filter.completed !== undefined && task.completed !== filter.completed)
                return false;
            return true;
        });
    };
    Todolist.prototype.deleteTask = function (id) {
        var initialLength = this.tasks.length;
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
        return this.tasks.length < initialLength;
    };
    Todolist.prototype.toggleTaskStatus = function (id) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (task) {
            task.completed = !task.completed;
            return task;
        }
        return null;
    };
    Todolist.prototype.searchTaskbytitle = function (keyword) {
        var LowerKeyword = keyword.toLowerCase();
        return this.tasks.filter(function (task) { return task.title.toLowerCase().includes(LowerKeyword); });
    };
    return Todolist;
}());
function runTests() {
    var myTodoList = new Todolist();
    myTodoList.addTask("learning TypeScript");
    myTodoList.addTask("Go shopping");
    myTodoList.addTask("By book");
    myTodoList.toggleTaskStatus(1);
    console.log("all task");
    console.log(myTodoList.getTasks());
    console.log("result search : ");
    console.log(myTodoList.searchTaskbytitle("Go"));
    myTodoList.deleteTask(2);
    console.log("do it tasks : ");
    console.log(myTodoList.filterTasks({ completed: true }));
}
runTests();
