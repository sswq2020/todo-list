import { Component, OnInit } from '@angular/core';
import { interval, Subject, Observable, merge } from 'rxjs';
import { map, withLatestFrom, startWith, scan, mapTo } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { SECOND, HOUR, ADVANCE, RESET } from '../reducers';


@Component({
  selector: 'app-about', // 选择器
  templateUrl: './about.component.html', // 模板
  styleUrls: ['./about.component.css'] // 样式
})
// 在Angular 8中,一个组件就是一个类,使用@Component装饰器进行装饰
export class AboutComponent implements OnInit {
  count$:any;

  // clock: Observable<Date>;
  clock: any;

  update$ = new Subject();

  // people$: Observable<{name: string; clock: any}[]>;
  people: any;

  people$: Subject<{ name: string, time: Date }> = new Subject();

  reset$ = new Subject();

  private interval$ = interval(3000).pipe(map(_ => ({ type: SECOND, payload: 3 })));

  private click$ = this.update$.asObservable().pipe(map(value => ({ type: HOUR, payload: Number(value) })));

  private person$ = this.people$.asObservable().pipe(
    map(person => ({ type: ADVANCE, payload: person }))
  );

  constructor(private store: Store<any>) {
    this.clock = this.store.select('clock');

    this.people = this.store.select('people');

    this.count$ = this.store.select('count');
  }

  ngOnInit() {
    merge(this.interval$, this.click$, this.person$, this.reset$.pipe(
      withLatestFrom(this.clock, (_, time) => {
        return {
          type: RESET,
          payload: time
        };
      })
    ))
      .subscribe(this.store.dispatch.bind(this.store));
  }
}
