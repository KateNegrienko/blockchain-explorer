import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BlockchainDataService } from '../data/blockchain.data.service';
import { BlockData } from '../data/block.data';

import { BlockActions, BlockState } from './block.state';

@Injectable()
export class BlockService {

    constructor(
        private BlockchainDataService: BlockchainDataService,
        private blockActions: BlockActions,
        private store: Store<any>
    ) { }

    public get error$(): Observable<string> {
        return this.store.select<any>((state) => state.block.error);
    }

    public get loading$(): Observable<boolean> {
        return this.store.select<any>((state) => state.block.loading);
    }

    public get block$(): Observable<BlockData> {
        return this.store.select<any>((state) => state.block.block);
    }

    public get date$(): Observable<Date> {
        return this.store.select<any>((state) => state.block.date);
    }

    public readingBlock(hash: string): void {
        this.store.dispatch(this.blockActions.readingBlock(hash));
    }
}
