import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  channelNameInParent = '';
  messageFromChild: any = '';

  constructor() {}
  ngOnInit(): void {}

  receiveMessage(msg: String) {
    console.log(msg);
    this.messageFromChild = msg;
  }
}
