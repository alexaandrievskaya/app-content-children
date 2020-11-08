import {Component, ContentChildren, OnInit, QueryList, AfterContentInit} from '@angular/core';
import {ItemComponent} from '../item/item.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, AfterContentInit {

  count = 0;

  /* Декоратор ContentChildren необходим для получения доступа к компонентам полченным через ng-content */
  @ContentChildren(ItemComponent)
  items: QueryList<ItemComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    this.count = this.items.length;
    this.items.forEach((item, i) => item.increment(i));
  }

}
