import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'interfaces'
import { initialState } from './slice'
const selectSlice = (state: RootState) => state.overlayLoader || initialState

export const selectOverlayLoader = createSelector(
  [selectSlice],
  (state) => state,
)
