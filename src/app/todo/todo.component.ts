import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-list/interface';
import { TodoService } from '../providers/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[];

  constructor(private todoServe: TodoService) { }

  delete(id: number) {
    this.todoServe.delete(id);
  }

  ngOnInit() {
    this.todoList = this.todoServe.getTodos();
  }

  add(data: Partial<Todo>) {
    this.todoServe.addTodo(data);
  }

}
