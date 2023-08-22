import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  @Input()
  items = [{ name: 'Cat', type: 'animal' }];

  @Output()
  selectedItemEmitter = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  selectItem(item: any) {
    this.selectedItemEmitter.emit(item);
    //console.log(this.selectedItemEmitter);
  }
}
