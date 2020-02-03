import { Action } from '@ngrx/store';
import { Receipt } from '../model/receipt';
import { Basket } from '../model/basket';
    
export enum ActionTypes {
    LoadBaskets = '[Baskets] Load the shopping baskets',
    LoadBasketsSuccess = '[Baskets] Load the items successfully into the shopping basket',
    Checkout = '[Baskets] Checkout basket',
}
    
export class LoadBaskets implements Action {
    readonly type = ActionTypes.LoadBaskets;
}

export class LoadBasketsSuccess implements Action {
    readonly type = ActionTypes.LoadBasketsSuccess;
  
    constructor(public payload: Basket[]) {}
  }

export class Checkout implements Action {
    readonly type = ActionTypes.Checkout;
    
    constructor(public payload: Receipt[]) {}
}

export type ActionsUnion = LoadBaskets | LoadBasketsSuccess | Checkout;
