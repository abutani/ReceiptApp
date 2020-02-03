import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActionTypes } from '../../store/actions';

import { Basket } from 'src/app/model/basket';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  baskets: Basket[];

  constructor(private store: Store<{ baskets: Basket[]; receipts: [] }>) {
    store.pipe(select(state => state.baskets)).subscribe(data => (this.baskets = data));
  }

  ngOnInit() {
    this.store.dispatch({ type: ActionTypes.LoadBaskets });
  }
}
