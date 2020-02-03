import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { ItemTypes } from '../../model/item';
import { Checkout } from '../../store/actions';
import { Receipt } from '../../model/receipt';
import { Basket } from 'src/app/model/basket';
import { formatPrice, zeroIfNegative } from 'src/app/utils/helper';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.sass']
})
export class ReceiptComponent implements OnInit {

  constructor(private store: Store<{ items: []; receipts: [] }>) {
  }

  receipts: Receipt[] = [];
  @Input() baskets: Basket[] = [];

  private taxExemptTypes = [ItemTypes.Candy.valueOf(), ItemTypes.Popcorn.valueOf() , ItemTypes.Coffee.valueOf()]; 

  generateReceipts() {

    this.baskets.forEach(basket => {

      let receipt = {} as Receipt;      
      let totalTax = 0;
      let totalPrice = 0;

      basket.items.forEach( (item) => {

        let tax = 0;
        let itemPrice = zeroIfNegative(Number(item.price));
        totalPrice += itemPrice;

        const types = item.type.split(',');
        let count =0;

        types.forEach( (type) => { 

          console.log(type);
          if (count === 0 && !(this.taxExemptTypes.includes(type))) {
            console.log(item.name + '1' + tax);
            tax = 0.1 * itemPrice;   
          }

          if (type === ItemTypes.Imported) {
            tax += (0.05 * itemPrice);
            console.log(item.name + '2' + tax);
          }
          count++;
        });

        item.price = formatPrice(itemPrice + tax);
        totalTax += tax;

        console.log(item.name + '' + item.price);
        
      })

      const salesTax = Math.round(totalTax / 0.05) * 0.05;

      receipt.basket = basket;
      receipt.salesTax = formatPrice(salesTax);
      receipt.total = formatPrice(totalPrice + salesTax);

      this.receipts.push(receipt);
    });

    this.store.dispatch(new Checkout(this.receipts));
  }
  
  ngOnInit() {
  }

}
