import { Component, OnInit } from '@angular/core';

interface filteredItem {
  name: string;
  type: string;
}

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  filteredItems: filteredItem[] = [];
  items = [
    { name: 'Cat', type: 'animal' },
    { name: 'Green', type: 'color' },
    { name: 'Apple', type: 'fruit' },
    { name: 'Dog', type: 'animal' },
    { name: 'Banana', type: 'fruit' },
    { name: 'Black', type: 'color' },
    { name: 'Horse', type: 'animal' },
    { name: 'Cherry', type: 'fruit' },
    { name: 'Cow', type: 'animal' },
    { name: 'Yellow', type: 'color' },
    { name: 'Mango', type: 'fruit' },
    { name: 'Red', type: 'color' },
    { name: 'Orange', type: 'fruit' },
    { name: 'Goat', type: 'animal' },
    { name: 'Blue', type: 'color' },
  ];
  selectedItem: any;
  constructor() {}
  ngOnInit() {
    this.filteredItems = [...this.items];
    // console.log(this.filteredItems);
  }
  filterBy(type: string) {
    this.filteredItems = [...this.items.filter((x) => x.type === type)];
    //console.log(this.filteredItems);
  }

  selectItem(item: any) {
    this.selectedItem = item;
  }
}
