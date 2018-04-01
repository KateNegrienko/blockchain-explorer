import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BlockchainDataService } from '../data/blockchain.data.service';
import { BlockData } from '../data/block.data';

import { BlocksActions, BlocksState } from './blocks.state';

@Injectable()
export class BlocksService {

    constructor(
        private BlockchainDataService: BlockchainDataService,
        private blocksActions: BlocksActions,
        private store: Store<any>
    ) { }

    public get error$(): Observable<string> {
        return this.store.select<any>((state) => state.blocks.error);
    }

    public get loading$(): Observable<boolean> {
        return this.store.select<any>((state) => state.blocks.loading);
    }

    public get blocks$(): Observable<BlockData[]> {
        return this.store.select<any>((state) => state.blocks.blocks);
    }

    public get date$(): Observable<Date> {
        return this.store.select<any>((state) => state.blocks.date);
    }

    public readingBlocks(date: Date): void {
        this.store.dispatch(this.blocksActions.readingBlocks(date));
    }
}
