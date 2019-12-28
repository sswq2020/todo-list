import { Component, OnInit, Output, EventEmitter, Input,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BtnComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  disabled = false;

  @Output()
  click$: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
