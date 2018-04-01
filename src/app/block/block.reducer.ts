import { Map } from 'immutable';
import { Action } from '@ngrx/store';

import { BlockState, BlockActionTypes, BlockActions, InitialBlockState } from './block.state';

export function blockReducer(state = InitialBlockState, action: any): BlockState {
    switch (action.type) {
        case BlockActionTypes.ReadingBlock:
            let map = Map(state);
            map = map.set('block', []);
            map = map.set('error', null);
            map = map.set('loading', true);
            map = map.set('date', action.payload);

            return map.toJS();

        case BlockActionTypes.ReadingBlockSuccess:
            map = Map(state);
            map = map.set('error', null);
            map = map.set('loading', false);
            map = map.set('block', action.payload);

            return map.toJS();

        case BlockActionTypes.ReadingBlockFail:
            map = Map(state);
            map = map.set('error', action.payload);
            map = map.set('loading', false);

            return map.toJS();

        default:
            return state;
    }
}
