import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BlockchainDataService } from '../data/blockchain.data.service';
import { TransactionData } from '../data/transaction.data';

import { TransactionActions, TransactionState } from './transaction.state';

@Injectable()
export class TransactionService {

    constructor(
        private TransactionchainDataService: BlockchainDataService,
        private transactionActions: TransactionActions,
        private store: Store<any>
    ) { }

    public get error$(): Observable<string> {
        return this.store.select<any>((state) => state.transaction.error);
    }

    public get loading$(): Observable<boolean> {
        return this.store.select<any>((state) => state.transaction.loading);
    }

    public get transaction$(): Observable<TransactionData> {
        return this.store.select<any>((state) => state.transaction.transaction);
    }

    public readingTransaction(hash: string): void {
        this.store.dispatch(this.transactionActions.readingTransaction(hash));
    }
}
