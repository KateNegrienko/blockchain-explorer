import { Map } from 'immutable';
import { Action } from '@ngrx/store';

import { MainState, MainActionTypes, MainActions, InitialMainState } from './main.state';

export function mainReducer(state = InitialMainState, action: any): MainState {
    switch (action.type) {
        case MainActionTypes.ReadingLastBlocks:
            let map = Map(state);
            map = map.set('lastBlocks', []);
            map = map.set('error', null);
            map = map.set('loading', true);

            return map.toJS();

        case MainActionTypes.ReadingLastBlocksSuccess:
            map = Map(state);
            map = map.set('error', null);
            map = map.set('loading', false);
            map = map.set('lastBlocks', action.payload);

            return map.toJS();

        case MainActionTypes.ReadingLastBlocksFail:
            map = Map(state);
            map = map.set('error', action.payload);
            map = map.set('loading', false);

            return map.toJS();

        case MainActionTypes.ReadingLastTransactions:
            map = Map(state);
            map = map.set('lastTransactions', []);
            map = map.set('error', null);
            map = map.set('loading', true);

            return map.toJS();

        case MainActionTypes.ReadingLastTransactionsSuccess:
            map = Map(state);
            map = map.set('error', null);
            map = map.set('loading', false);
            map = map.set('lastTransactions', action.payload);

            return map.toJS();

        case MainActionTypes.ReadingLastTransactionsFail:
            map = Map(state);
            map = map.set('error', action.payload);
            map = map.set('loading', false);

            return map.toJS();

        case MainActionTypes.ReadingBlockByHeight:
            map = Map(state);
            map = map.set('blockHash', null);
            map = map.set('searchError', null);
            map = map.set('searchLoading', true);

            return map.toJS();

        case MainActionTypes.ReadingBlockByHeightSuccess:
            map = Map(state);
            map = map.set('searchError', null);
            map = map.set('searchLoading', false);
            map = map.set('blockHash', action.payload[0].hash);
            return map.toJS();

        case MainActionTypes.ReadingBlockByHeightFail:
            map = Map(state);
            map = map.set('searchError', action.payload);
            map = map.set('searchLoading', false);
            map = map.set('blockHash', null);

            return map.toJS();

        case MainActionTypes.ReadingChart:
            map = Map(state);
            map = map.set('chartData', null);
            map = map.set('error', null);

            return map.toJS();

        case MainActionTypes.ReadingChartSuccess:
            map = Map(state);
            map = map.set('chartData', action.payload);

            return map.toJS();

        case MainActionTypes.ReadingChartFail:
            map = Map(state);
            map = map.set('error', action.payload);

            return map.toJS();


        default:
            return state;
    }
}
