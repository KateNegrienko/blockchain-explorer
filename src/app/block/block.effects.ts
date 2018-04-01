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

import { BlockActionTypes, BlockState, BlockActions } from './block.state';

@Injectable()
export class BlockEffects {
    private messages;
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private actions$: Actions,
        private BlockchainDataService: BlockchainDataService,
        private actions: BlockActions
    ) { }

    @Effect() readingBlock$: Observable<Action> = this.actions$.ofType(
        BlockActionTypes.ReadingBlock
    )
        .switchMap(action => {
            if (action.type = BlockActionTypes.ReadingBlock) {
                const payload = (<any>action).payload;
                return this.BlockchainDataService.singleBlock(payload)
                    .map(data => {
                        return this.actions.readingBlockSuccess(data);
                    })
                    .catch(error => Observable.of(this.actions.readingBlockFail(error)));
            } else {
                return Observable.of();
            }
        });
}
