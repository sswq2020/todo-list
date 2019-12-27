import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo-list/interface';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [
    { id: 999, description: 'For test purpose', category: 1, content: 'test' },
    { id: 998, description: 'For test purpose aaa', category: 2, content: 'test aaa' },
    { id: 991, description: 'For test purpose bbb', category: 4, content: 'test bbb' },
    { id: 992, description: 'For test purpose ccc', category: 6, content: 'test ccc' }
  ];

  constructor() { }

  delete(id: number) {
    const index = this.todoList.findIndex(item => item.id === id);
    if (index > -1) { this.todoList.splice(index, 1); }
  }

  ngOnInit() {
  }

}
