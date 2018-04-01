import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { BlockData } from '../data/block.data';
import { TransactionData } from '../data/transaction.data';

export class MainState {
    public lastBlocks: BlockData[];
    public lastTransactions: TransactionData[];
    public loading: boolean;
    public error: any;
    public searchLoading: boolean;
    public searchError: any;
    public blockHash: string;
    public chartData: any;
}

export const InitialMainState: MainState = {
    lastBlocks: [],
    lastTransactions: [],
    loading: null,
    error: null,
    searchLoading: false,
    searchError: null,
    blockHash: null,
    chartData: null
};

export class MainActionTypes {
    static ReadingLastBlocks = '[Main] Reading Last blocks';
    static ReadingLastBlocksSuccess = '[Main] Reading Last Blocks Success';
    static ReadingLastBlocksFail = '[Main] Reading Last Blocks Fail';

    static ReadingLastTransactions = '[Main] Reading Last Transactions';
    static ReadingLastTransactionsSuccess = '[Main] Reading Last Transactions Success';
    static ReadingLastTransactionsFail = '[Main] Reading Last Transactions Fail';

    static ReadingBlockByHeight = '[Main] Reading Block By Height';
    static ReadingBlockByHeightSuccess = '[Main] Reading Block By Height Success';
    static ReadingBlockByHeightFail = '[Main] Reading Block By Height Fail';

    static ReadingChart = '[Main] Reading chart';
    static ReadingChartSuccess = '[Main] Reading Chart Success';
    static ReadingChartFail = '[Main] Reading Chart Fail';
}

@Injectable()
export class MainActions {

    readingLastBlocks(): Action {
        return <Action>{
            type: MainActionTypes.ReadingLastBlocks
        };
    }

    readingLastBlocksSuccess(blocks: BlockData[]): Action {
        return <any>{
            type: MainActionTypes.ReadingLastBlocksSuccess,
            payload: blocks
        };
    }

    readingLastBlocksFail(error): Action {
        return <any>{
            type: MainActionTypes.ReadingLastBlocksFail,
            payload: error
        };
    }

    readingLastTransactions(block_hash: string): Action {
        return <Action>{
            type: MainActionTypes.ReadingLastTransactions,
            payload: block_hash
        };
    }

    readingLastTransactionsSuccess(transactions: TransactionData[]): Action {
        return <any>{
            type: MainActionTypes.ReadingLastTransactionsSuccess,
            payload: transactions
        };
    }

    readingLastTransactionsFail(error): Action {
        return <any>{
            type: MainActionTypes.ReadingLastTransactionsFail,
            payload: error
        };
    }

    readingBlockByHeight(block_height: number): Action {
        return <Action>{
            type: MainActionTypes.ReadingBlockByHeight,
            payload: block_height
        };
    }

    readingBlockByHeightSuccess(blocks: BlockData[]): Action {
        return <any>{
            type: MainActionTypes.ReadingBlockByHeightSuccess,
            payload: blocks
        };
    }

    readingBlockByHeightFail(error): Action {
        return <any>{
            type: MainActionTypes.ReadingBlockByHeightFail,
            payload: error
        };
    }

    readingChart(): Action {
        return <Action>{
            type: MainActionTypes.ReadingChart
        };
    }

    readingChartSuccess(chartData: any): Action {
        return <any>{
            type: MainActionTypes.ReadingChartSuccess,
            payload: chartData
        };
    }

    readingChartFail(error): Action {
        return <any>{
            type: MainActionTypes.ReadingChartFail,
            payload: error
        };
    }

}
