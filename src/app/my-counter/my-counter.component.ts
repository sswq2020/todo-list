import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { increment, decrement, reset } from './my-counter.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {
  // count$: Observable<number>;
  count$: any;

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit() {
  }

}
