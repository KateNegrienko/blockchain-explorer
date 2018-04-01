import { Map } from 'immutable';
import { Action } from '@ngrx/store';

import { TransactionState, TransactionActionTypes, TransactionActions, InitialTransactionState } from './transaction.state';

export function transactionReducer(state = InitialTransactionState, action: any): TransactionState {
    switch (action.type) {
        case TransactionActionTypes.ReadingTransaction:
            let map = Map(state);
            map = map.set('transaction', []);
            map = map.set('error', null);
            map = map.set('loading', true);

            return map.toJS();

        case TransactionActionTypes.ReadingTransactionSuccess:
            map = Map(state);
            map = map.set('error', null);
            map = map.set('loading', false);
            map = map.set('transaction', action.payload);

            return map.toJS();

        case TransactionActionTypes.ReadingTransactionFail:
            map = Map(state);
            map = map.set('error', action.payload);
            map = map.set('loading', false);

            return map.toJS();

        default:
            return state;
    }
}
