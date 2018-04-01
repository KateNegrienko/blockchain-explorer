import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { BlockData } from '../data/block.data';

export class BlocksState {
    public blocks: BlockData[];
    public loading: boolean;
    public error: any;
    public date: Date;
}

export const InitialBlocksState: BlocksState = {
    blocks: [],
    date: new Date(),
    loading: null,
    error: null
};

export class BlocksActionTypes {
    static ReadingBlocks = '[Blocks] Reading Last blocks';
    static ReadingBlocksSuccess = '[Blocks] Reading Last Blocks Success';
    static ReadingBlocksFail = '[Blocks] Reading Last Blocks Fail';
}

@Injectable()
export class BlocksActions {

    readingBlocks(date: Date): Action {
        return <Action>{
            type: BlocksActionTypes.ReadingBlocks,
            payload: date
        };
    }

    readingBlocksSuccess(blocks: BlockData[]): Action {
        return <any>{
            type: BlocksActionTypes.ReadingBlocksSuccess,
            payload: blocks
        };
    }

    readingBlocksFail(error): Action {
        return <any>{
            type: BlocksActionTypes.ReadingBlocksFail,
            payload: error
        };
    }

}
