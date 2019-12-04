import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about', // 选择器
  templateUrl: './about.component.html', // 模板
  styleUrls: ['./about.component.css'] // 样式
})
// 在Angular 8中,一个组件就是一个类,使用@Component装饰器进行装饰
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
