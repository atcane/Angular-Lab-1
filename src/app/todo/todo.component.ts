import { Component, OnInit } from '@angular/core';

interface Todo {
  
  task : string;
  completed : boolean; 
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  filter: string = '';

  todos : Todo[] = [
    {task: 'wash and dry clothes', completed: false},
    {task: 'put clothes away', completed: false},
    {task: 'make the bed', completed: true},
    {task: 'try to finish lab assignment', completed: false},
    {task: 'play with dogs', completed: true},
    {task: 'prepare for meetings', completed: false},
  ]

  completeTask = function(todo:Todo) {
    todo.completed = true;
  } 

  removeTask = function(task:string): void {
//  removeTask = function(todo : Todo): {
  let removeTask = this.todo.findIndex(function(todo){
    return todo.task===task
  })
this.todo.splice(removeTask, 1)
  }

  addTask = function(task:string): void {
  let newTask = {
    task: "", completed: false,
  }
  this.todos.push(newTask);
  }

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

  constructor() { }

  ngOnInit(): void {
  }

}
