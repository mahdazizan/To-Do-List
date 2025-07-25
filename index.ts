interface Task{
  id: number;
  title: string;
  completed: boolean;
}

interface TaskFilter{
  id?: number;
  title?: string;
  completed?: boolean;
}

class Todolist{
  private tasks: Task[] = [];
  private nextid: number = 1;

  getTasks(): Task[]{
    return [...this.tasks];
  }

  addTask(title: string): Task{
    const newTask: Task = {
      id: this.nextid++,
      title,
      completed: false
    };
    this.tasks.push(newTask);
    return newTask;
  }
  filterTasks(filter: TaskFilter): Task[]{
    return this.tasks.filter(task => {
      if (filter.id !== undefined && task.id !== filter.id) return false;
      if (filter.title !== undefined && task.title.includes(filter.title)) return false;
      if (filter.completed !== undefined && task.completed !== filter.completed) return false;
      return true;
    });
  }

  deleteTask(id: number): boolean {
    const initialLength = this.tasks.length;
    this.tasks = this.tasks.filter(task => task.id !== id);
    return this.tasks.length < initialLength;
  }

  toggleTaskStatus(id: number): Task | null {
    const task = this.tasks.find(t => t.id === id);
    if(task){
      task.completed = !task.completed;
      return task;
    }
    return null;
  }

  searchTaskbytitle(keyword: string): Task[]{
    const LowerKeyword = keyword.toLowerCase();
    return this.tasks.filter(task => task.title.toLowerCase().includes(LowerKeyword));
  }
}

function runTests(){
  const myTodoList = new Todolist();

  myTodoList.addTask("learning TypeScript");
  myTodoList.addTask("Go shopping");
  myTodoList.addTask("By book");

  myTodoList.toggleTaskStatus(1);

  console.log("all task");
  console.log(myTodoList.getTasks());
  
  console.log("result search : ");
  console.log(myTodoList.searchTaskbytitle("lear"));

  myTodoList.deleteTask(3);

  console.log("do it tasks : ");
  console.log(myTodoList.filterTasks({completed:false}));
}

runTests();