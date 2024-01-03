import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { isEmpty } from 'lodash'

import { selectStateSaga } from './saga'
import { SelectStateState } from './types'
import { filterLabels } from './utils/filterLabels'

export const initialState: SelectStateState = {
  selectors: [],
}

const slice = createSlice({
  name: 'selectState',
  initialState,
  reducers: {
    setSelectors(state, action: PayloadAction<any>) {
      state.selectors = filterLabels(state.selectors.concat(action.payload))
    },
    setAllSelectors(state, actions) {
      state.selectors = state.selectors.map((item) => {
        let data = item
        if (item?.field === actions?.payload?.field) {
          data = actions.payload
        }
        return data
      })
    },
  },
})

export const { actions: selectStateActions } = slice

export const useSelectStateSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: selectStateSaga })
  return { actions: slice.actions }
}

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useSelectStateSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
