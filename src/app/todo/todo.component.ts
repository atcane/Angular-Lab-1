import { Component, OnInit } from '@angular/core';
​
interface Todo {
  task: string;
  completed: boolean;
}
​
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
​
  filter: string = '';
  //give your componenet a property for the newTask to bind to
  newTask: string;
​
  todos: Todo[] = [
    { task: 'wash and dry clothes', completed: false },
    { task: 'put clothes away', completed: false },
    { task: 'make the bed', completed: true },
    { task: 'try to finish lab assignment', completed: false },
    { task: 'play with dogs', completed: true },
    { task: 'prepare for meetings', completed: false },
  ];
​
  completeTask = function (todo: Todo) {
    todo.completed = true;
  };
​
  removeTask = function (task: string): void {
    // you had "this.todo.findIndex.." you need this.todoS to refer to your array
    let removeTask = this.todos.findIndex(function (todo) {
      return todo.task === task;
    });
    // you had "this.todo.splice.." you need this.todoS to refer to your array
    this.todos.splice(removeTask, 1);
  };
​
​
  // now, because of the model binding, you have the value of "newTask", so you can use it here
  addTask = function (): void {
    let newTodo: Todo = {
      task: this.newTask,
      completed: false,
    };
    this.todos.push(newTodo);
  };
​
  displayedTodos: Todo[] = [...this.todos];
  getFilteredResults(): Todo[] {
    return this.displayedTodos.filter((todo) => {
      // convert the todo.task to lowercase
      const taskLower = todo.task.toLowerCase();
      // convert the filter input to lowercase
      const filterLower = this.filter.toLowerCase();
      // check to set if the filter input is inside of the task
      // string
      return taskLower.includes(filterLower);
    });
  }
​
  constructor() {}
​
  ngOnInit(): void {}

}