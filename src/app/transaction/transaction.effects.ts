import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

import { BlockchainDataService } from '../data/blockchain.data.service';

import { TransactionActionTypes, TransactionState, TransactionActions } from './transaction.state';

@Injectable()
export class TransactionEffects {
    private messages;
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private actions$: Actions,
        private BlockchainDataService: BlockchainDataService,
        private actions: TransactionActions
    ) { }

    @Effect() readingTransaction$: Observable<Action> = this.actions$.ofType(
        TransactionActionTypes.ReadingTransaction
    )
        .switchMap(action => {
            if (action.type = TransactionActionTypes.ReadingTransaction) {
                const payload = (<any>action).payload;
                return this.BlockchainDataService.singleTransaction(payload)
                    .map(data => {
                        return this.actions.readingTransactionSuccess(data);
                    })
                    .catch(error => Observable.of(this.actions.readingTransactionFail(error)));
            } else {
                return Observable.of();
            }
        });
}
