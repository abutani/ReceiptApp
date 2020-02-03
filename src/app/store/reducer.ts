import { ActionsUnion, ActionTypes } from './actions';
    
export const initialState = {
    baskets: [], 
    receipt: null
};

export function ShoppingReducer(state = initialState, action: ActionsUnion) {
  switch (action.type) {

    case ActionTypes.LoadBasketsSuccess:
        return {
          ...state,
          baskets: [...action.payload]
        };

      case ActionTypes.Checkout:
        return {
          ...state,
          receipt: [...action.payload]
        };

    default:
      return state;
  }
}