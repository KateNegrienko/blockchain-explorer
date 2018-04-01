import { Inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { BlockchainDataService } from '../data/blockchain.data.service';
import { BlockData } from '../data/block.data';
import { TransactionData } from '../data/transaction.data';

import { MainActions, MainState } from './main.state';

@Injectable()
export class MainService {

    constructor(
        private BlockchainDataService: BlockchainDataService,
        private mainActions: MainActions,
        private store: Store<any>
    ) { }

    public get error$(): Observable<string> {
        return this.store.select<any>((state) => state.main.error);
    }

    public get loading$(): Observable<boolean> {
        return this.store.select<any>((state) => state.main.loading);
    }

    public get chartData$(): Observable<any> {
        return this.store.select<any>((state) => state.main.chartData);
    }

    public get lastBlocks$(): Observable<BlockData[]> {
        return this.store.select<any>((state) => state.main.lastBlocks);
    }

    public get lastTransactions$(): Observable<TransactionData[]> {
        return this.store.select<any>((state) => state.main.lastTransactions);
    }

    public readingLastBlocks(): void {
        this.store.dispatch(this.mainActions.readingLastBlocks());
    }

    public readingChart(): void {
        this.store.dispatch(this.mainActions.readingChart());
    }

    public readingBlockByHeight(height: number): void {
        this.store.dispatch(this.mainActions.readingBlockByHeight(height));
    }
}
