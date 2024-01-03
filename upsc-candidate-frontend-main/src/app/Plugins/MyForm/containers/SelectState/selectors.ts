import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'interfaces'
import { initialState } from './slice'
const selectSlice = (state: RootState) => state?.selectState || initialState

export const selectSelectState = createSelector(
  [selectSlice],
  (state) => state.selectors,
)
