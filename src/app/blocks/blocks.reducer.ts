import { Map } from 'immutable';
import { Action } from '@ngrx/store';

import { BlocksState, BlocksActionTypes, BlocksActions, InitialBlocksState } from './blocks.state';

export function blocksReducer(state = InitialBlocksState, action: any): BlocksState {
    switch (action.type) {
        case BlocksActionTypes.ReadingBlocks:
            let map = Map(state);
            map = map.set('blocks', []);
            map = map.set('error', null);
            map = map.set('loading', true);
            map = map.set('date', action.payload);

            return map.toJS();

        case BlocksActionTypes.ReadingBlocksSuccess:
            map = Map(state);
            map = map.set('error', null);
            map = map.set('loading', false);
            map = map.set('blocks', action.payload);

            return map.toJS();

        case BlocksActionTypes.ReadingBlocksFail:
            map = Map(state);
            map = map.set('error', action.payload);
            map = map.set('loading', false);

            return map.toJS();

        default:
            return state;
    }
}
