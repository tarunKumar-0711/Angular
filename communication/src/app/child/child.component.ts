import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  @Input()
  channelName = 'Hello';

  @Output()
  sendMessageEmitter = new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  sendMessageToParent(e: Event) {
    this.sendMessageEmitter.emit((e.target as HTMLInputElement).value);
  }
}
