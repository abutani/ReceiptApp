import { Component, OnInit, Input } from '@angular/core';
import { Basket } from '../../model/basket'


@Component({
  selector: 'app-basket-list',
  templateUrl: './basket-list.component.html',
  styleUrls: ['./basket-list.component.sass']
})
export class BasketListComponent implements OnInit {

  constructor() {}

  @Input() baskets:  Basket[] = [];

  ngOnInit() {
  }

}
