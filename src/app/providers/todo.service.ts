import { Injectable } from '@angular/core';
import { Todo } from '../todo-list/interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private data: Todo[] = [
    { id: 999, description: 'For test purpose', category: 0, content: 'test' },
    { id: 998, description: 'For test purpose aaa', category: 1, content: 'test aaa' },
    { id: 991, description: 'For test purpose bbb', category: 1, content: 'test bbb' },
    { id: 992, description: 'For test purpose ccc', category: 2, content: 'test ccc' }
  ];

 /***获取私有的data数据**/
  getTodos(): Todo[] {
    return this.data;
  }

 /***删除某一行元素**/
 delete(id: number) {
  const index = this.data.findIndex(item => item.id === id);
  if (index > -1) { this.data.splice(index, 1); }
 }

  constructor() { }
}
