import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clock',
  template: '{{time | async | date:"yyyy-MM-dd hh:mm:ss"}}',
})
export class ClockComponent implements OnInit {
  @Input() time: Date;


  constructor() { }

  ngOnInit() {
  }

}
