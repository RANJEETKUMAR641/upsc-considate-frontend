import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { rootSaga } from './saga'
import { RootState } from './types'

export const initialState: RootState = {
  ifcData: {},
}

const slice = createSlice({
  name: 'root',
  initialState,
  reducers: {
    setIfcFilterData(state, action: PayloadAction<any>) {
      state.ifcData = action.payload
    },
  },
})

export const { actions: rootActions } = slice

export const useRootSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: rootSaga })
  return { actions: slice.actions }
}

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useRootSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
