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

import { MainActionTypes, MainState, MainActions } from './main.state';

@Injectable()
export class MainEffects {
    private messages;
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private actions$: Actions,
        private BlockchainDataService: BlockchainDataService,
        private actions: MainActions
    ) { }

    @Effect() readingLastBlocks$: Observable<Action> = this.actions$.ofType(
        MainActionTypes.ReadingLastBlocks
    )
        .switchMap(action => {
            if (action.type = MainActionTypes.ReadingLastBlocks) {
                const payload = (<any>action).payload;
                return this.BlockchainDataService.blocks(null)
                    .map(data => {
                        return this.actions.readingLastBlocksSuccess(data);
                    })
                    .catch(error => Observable.of(this.actions.readingLastBlocksFail(error)));
            } else {
                return Observable.of();
            }
        });

    @Effect() readingLastBlocksSuccess$: Observable<Action> = this.actions$.ofType(
        MainActionTypes.ReadingLastBlocksSuccess
    )
        .map(toPayload)
        .map(payload => {
            if (payload.length > 0) {
                return this.actions.readingLastTransactions(payload[0].hash);
            }
            return this.actions.readingLastTransactionsSuccess([]);
        });

    @Effect() readingLastTransactions$: Observable<Action> = this.actions$.ofType(
        MainActionTypes.ReadingLastTransactions
    )
        .switchMap(action => {
            if (action.type = MainActionTypes.ReadingLastTransactions) {
                const payload = (<any>action).payload;
                return this.BlockchainDataService.singleBlock(payload)
                    .map(data => {
                        return this.actions.readingLastTransactionsSuccess(data ? data.tx : []);
                    })
                    .catch(error => Observable.of(this.actions.readingLastTransactionsFail(error)));
            } else {
                return Observable.of();
            }
        });

    @Effect() readingBlockByHeight$: Observable<Action> = this.actions$.ofType(
        MainActionTypes.ReadingBlockByHeight
    )
        .switchMap(action => {
            if (action.type = MainActionTypes.ReadingLastBlocks) {
                const payload = (<any>action).payload;
                return this.BlockchainDataService.heightBlock(payload)
                    .map(data => {
                        return this.actions.readingBlockByHeightSuccess(data);
                    })
                    .catch(error => Observable.of(this.actions.readingBlockByHeightFail(error)));
            } else {
                return Observable.of();
            }
        });

    @Effect({ dispatch: false }) readingBlockByHeightSuccess$: Observable<Action> = this.actions$.ofType(
        MainActionTypes.ReadingBlockByHeightSuccess
    )
        .do(action => {
            const actionWithPayload = <any>action;
            if (actionWithPayload.payload && actionWithPayload.payload[0] && actionWithPayload.payload[0].hash) {
                this.router.navigate(['blocks/', actionWithPayload.payload[0].hash]);
            }
        });

        @Effect() readingChart$: Observable<Action> = this.actions$.ofType(
            MainActionTypes.ReadingChart
        )
            .switchMap(action => {
                if (action.type = MainActionTypes.ReadingChart) {
                    return this.BlockchainDataService.chart()
                        .map(data => {
                            return this.actions.readingChartSuccess(data);
                        })
                        .catch(error => Observable.of(this.actions.readingChartFail(error)));
                } else {
                    return Observable.of();
                }
            });
}
