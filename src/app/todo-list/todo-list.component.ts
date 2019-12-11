import { Component, OnInit } from '@angular/core';
import {Todo} from './interface';

interface PrivateTodo  extends Todo {
  selected?: boolean;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<PrivateTodo> = [
    { id: 999, description: 'For test purpose', category: 1, content: 'test' },
    { id: 998, description: 'For test purpose aaa', category: 2, content: 'test aaa' },
    { id: 991, description: 'For test purpose bbb', category: 4, content: 'test bbb' },
    { id: 992, description: 'For test purpose ccc', category: 6, content: 'test ccc' }
  ];

  selectAll = false;

  constructor() {}

  ngOnInit() {}

  delete(id: number) {
    const index = this.todos.findIndex(item => item.id === id);
    if (index > -1) { this.todos.splice(index, 1); }
  }

  toggleAll() {
    this.todos.forEach(item => item.selected = !this.selectAll);
  }

  check() {
    this.selectAll = this.todos.every(item => {
      return item.selected;
    });
  }

  deleteSelected() {
    this.todos.filter(item => item.selected).map(item2 => item2.id).forEach(item3 => this.delete(item3));
  }

}
