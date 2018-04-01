import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { TransactionData } from '../data/transaction.data';

export class TransactionState {
    public transaction: TransactionData;
    public loading: boolean;
    public error: any;
}

export const InitialTransactionState: TransactionState = {
    transaction: null,
    loading: null,
    error: null
};

export class TransactionActionTypes {
    static ReadingTransaction = '[Transaction] Reading Single transaction';
    static ReadingTransactionSuccess = '[Transaction] Reading Last Transaction Success';
    static ReadingTransactionFail = '[Transaction] Reading Last Transaction Fail';
}

@Injectable()
export class TransactionActions {

    readingTransaction(hash: string): Action {
        return <Action>{
            type: TransactionActionTypes.ReadingTransaction,
            payload: hash
        };
    }

    readingTransactionSuccess(transaction: TransactionData): Action {
        return <any>{
            type: TransactionActionTypes.ReadingTransactionSuccess,
            payload: transaction
        };
    }

    readingTransactionFail(error): Action {
        return <any>{
            type: TransactionActionTypes.ReadingTransactionFail,
            payload: error
        };
    }

}
