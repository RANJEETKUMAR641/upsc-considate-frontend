/* eslint-disable */

import { combineReducers } from 'redux'
import reducers from 'app/components/reducers'
import { connectRouter } from 'connected-react-router'

import history from 'utils/history'

import { InjectedReducersType } from 'utils/types/injector-typings'

export default function createReducer(
  injectedReducers: InjectedReducersType = {},
) {
  return combineReducers({
    ...injectedReducers,
    ...reducers,
    router: connectRouter(history),
  })
}
