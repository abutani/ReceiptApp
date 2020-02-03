import { Basket } from './basket';

export interface Receipt {
    basket: Basket;
    salesTax: string;
    total: string;
}