import { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { overlayLoaderSaga } from './saga'
import { OverlayLoaderState } from './types'

export const initialState: OverlayLoaderState = {
  loaderClassName: '',
  isOpen: false,
}

const slice = createSlice({
  name: 'overlayLoader',
  initialState,
  reducers: {
    startLoader(state, actions: PayloadAction<any>) {


      state.loaderClassName = actions.payload
      state.isOpen = true
    },
    stopLoader(state, actions: PayloadAction<any>) {
      state.loaderClassName = ''
      state.isOpen = false
    },
  },
})

export const { actions: overlayLoaderActions } = slice

export const useOverlayLoaderSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: overlayLoaderSaga })
  return { actions: slice.actions }
}

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useOverlayLoaderSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
