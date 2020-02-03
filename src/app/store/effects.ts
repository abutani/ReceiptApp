import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { BasketsService } from '../service/baskets.service';

@Injectable()
export class ShoppingEffects {
  constructor(
    private actions$: Actions,
    private basketsService: BasketsService
  ) {}
  
  @Effect()
  loadBaskets$ = this.actions$.pipe(
    ofType(ActionTypes.LoadBaskets),
    mergeMap(() =>
      this.basketsService.getAll().pipe(
        map(baskets => {
          return { type: ActionTypes.LoadBasketsSuccess, payload: baskets };
        }),
        catchError(() => EMPTY)
    )
    )
  );
}