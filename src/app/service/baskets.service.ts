import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ItemTypes } from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class BasketsService {

  constructor() { }

  getAll()
  {
    return of([
      {items: [ 
        {
          name: '16lb bag of Skittles',
          price: '16.00',
          quantity: 1,
          type: ItemTypes.Candy.valueOf()
        },
        {
          name: 'Walkman',
          price: '99.99',
          quantity: 1,
          type: ItemTypes.Other.valueOf()
        },
        {
          name: 'Bag of microwave Popcorn',
          price: '0.99',
          quantity: 1,
          type: ItemTypes.Popcorn.valueOf()
        }
      ]},
      {items: 
      [
        {
          name: 'imported bag of Vanilla-Hazelnut Coffee',
          price: '11.00',
          quantity: 1,
          type: ItemTypes.Coffee .valueOf()+ ',' + ItemTypes.Imported.valueOf()
        },
        {
          name: 'Imported Vespa',
          price: '15001.25',
          quantity: 1,
          type: ItemTypes.Imported.valueOf()
        }
      ]},
      {items: 
      [
        {
          name: 'imported crate of Almond Snickers',
          price: '75.99',
          quantity: 1,
          type: ItemTypes.Candy.valueOf() + ','  + ItemTypes.Imported.valueOf()
        },
        {
          name: 'Discman',
          price: '55.00',
          quantity: 1,
          type: ItemTypes.Other.valueOf()
        },
        {
          name: 'Imported Bottle of Wine',
          price: '10.00',
          quantity: 1,
          type: ItemTypes.Imported.valueOf()
        },
        {
          name: '300# bag of Fair-Trade Coffee',
          price: '997.99',
          quantity: 1,
          type: ItemTypes.Coffee.valueOf()
        }      
      ]}
    ]);
  }
}
