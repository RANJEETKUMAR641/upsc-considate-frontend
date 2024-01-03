import { createSelector } from '@reduxjs/toolkit'

import { RootState } from 'interfaces'
import { initialState } from './slice'
const selectSlice = (state: RootState) => state.root || initialState

export const selectRoot = createSelector([selectSlice], (state) => state)

export const selectRootIFC = createSelector(
  [selectSlice],
  (state) => state.ifcData,
)
