import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Todo} from './interface';
import {Router, ActivatedRoute} from '@angular/router';

interface PrivateTodo  extends Todo {
  selected?: boolean;
}
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: Array<PrivateTodo>;

  @Output()
  delete: EventEmitter<number> = new EventEmitter();

  selectAll: boolean;

  /***Router,ActivatedRoute是类,按理说应该需要实例化,但是Angular对其依赖注入，不需要自己实例化*/
  constructor(private router: Router, private route: ActivatedRoute) {
    this.selectAll = false;
  }

  deleteSelected() {
    this.todos
    .filter(item => item.selected)
    .map(item2 => item2.id)
    .forEach(item3 => this.delete.next(item3));
  }

  ngOnInit() {}

  toggleAll() {
    this.todos.forEach(item => item.selected = !this.selectAll);
  }

  check() {
    this.selectAll = this.todos.every(item => {
      return item.selected;
    });
  }



  navigateTo(item: PrivateTodo, e: MouseEvent) {
    if (e.target instanceof HTMLTableCellElement) {
      this.router.navigate([item.id], { relativeTo: this.route});
    }
  }

}
