import { Component, OnInit } from '@angular/core';
import { interval, Subject, Observable, merge } from 'rxjs';
import { map, startWith, scan, mapTo } from 'rxjs/operators';

@Component({
  selector: 'app-about', // 选择器
  templateUrl: './about.component.html', // 模板
  styleUrls: ['./about.component.css'] // 样式
})
// 在Angular 8中,一个组件就是一个类,使用@Component装饰器进行装饰
export class AboutComponent implements OnInit {

  clock: Observable<Date>;

  update$ = new Subject();

  constructor() { }

  ngOnInit() {
    this.clock = merge(
      interval(3000).pipe(mapTo('second')),
      this.update$.asObservable().pipe(mapTo('hour'))
    ).pipe(
      startWith('2017/12/22'),
      scan((acc, cur) => {
        const date = new Date(acc);
        if (cur === 'hour') {
          date.setHours(date.getHours() + 1);
        } else {
          date.setSeconds(date.getSeconds() + 1);
        }
        return date;
      })
    ) as Observable<Date>;
  }


}
