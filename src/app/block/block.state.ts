import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { BlockData } from '../data/block.data';

export class BlockState {
    public block: BlockData;
    public loading: boolean;
    public error: any;
    public date: Date;
}

export const InitialBlockState: BlockState = {
    block: null,
    date: new Date(),
    loading: null,
    error: null
};

export class BlockActionTypes {
    static ReadingBlock = '[Block] Reading Single block';
    static ReadingBlockSuccess = '[Block] Reading Last Block Success';
    static ReadingBlockFail = '[Block] Reading Last Block Fail';
}

@Injectable()
export class BlockActions {

    readingBlock(hash: string): Action {
        return <Action>{
            type: BlockActionTypes.ReadingBlock,
            payload: hash
        };
    }

    readingBlockSuccess(block: BlockData): Action {
        return <any>{
            type: BlockActionTypes.ReadingBlockSuccess,
            payload: block
        };
    }

    readingBlockFail(error): Action {
        return <any>{
            type: BlockActionTypes.ReadingBlockFail,
            payload: error
        };
    }

}
