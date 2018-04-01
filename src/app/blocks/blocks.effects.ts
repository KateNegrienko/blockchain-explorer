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

import { BlocksActionTypes, BlocksState, BlocksActions } from './blocks.state';

@Injectable()
export class BlocksEffects {
    private messages;
    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private actions$: Actions,
        private BlockchainDataService: BlockchainDataService,
        private actions: BlocksActions
    ) { }

    @Effect() readingBlocks$: Observable<Action> = this.actions$.ofType(
        BlocksActionTypes.ReadingBlocks
    )
        .switchMap(action => {
            if (action.type = BlocksActionTypes.ReadingBlocks) {
                const payload = (<any>action).payload;
                return this.BlockchainDataService.blocks(payload.getTime())
                    .map(data => {
                        return this.actions.readingBlocksSuccess(data);
                    })
                    .catch(error => Observable.of(this.actions.readingBlocksFail(error)));
            } else {
                return Observable.of();
            }
        });
}
