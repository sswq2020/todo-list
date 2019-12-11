import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todos: Array<any> = [
    { id: 999, description: 'For test purpose', category: 1, content: 'test' },
    { id: 998, description: 'For test purpose aaa', category: 1, content: 'test aaa' }
  ];

  selectAll: false;

  constructor() { }

  ngOnInit() {
  }

  delete(id: number) {
    const index = this.todos.findIndex(item => {
      return item.id === id;
    });
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

}
