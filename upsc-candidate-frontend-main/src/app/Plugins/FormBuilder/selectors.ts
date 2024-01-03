import { createSelector } from '@reduxjs/toolkit'

import { map, concat, get, split } from 'lodash'
import { initialState } from './slice'

const selectSlice = (state: any) => state.formBuilder || initialState

export const selectFormBuilder = createSelector([selectSlice], (state) => state)

export const selectShowForm = createSelector(
  [selectSlice],
  (state) => state.showForm,
)

export const selectFormsSchema = createSelector(
  [selectSlice],
  (state) => state.formSchema,
)

export const selectFormData = createSelector(
  [selectSlice],
  (state) => state.formPayload,
)

export const selectInitData = createSelector(
  [selectSlice],
  (state) => state.initData,
)

export const selectTableData = createSelector(
  [selectSlice],
  (state) => state.tableData,
)

export const selectFormPKeysData = createSelector(
  [selectSlice],
  (state) => state.formPkeyData,
)

export const selectFormsPKeys = createSelector(
  [selectSlice],
  (state) =>
    map(get(state, 'formSchema', []), (item) => {
      return {
        pkeys: concat(
          split(get(item?.schema, 'pkeys', []), ','),
          item?.schema?.pkeyid,
        ),
      }
    })?.[0]?.pkeys,
)

export const selectMultipleFormData = createSelector(
  [selectSlice],
  (state) => state.multipleSchema,
)

export const selectFormPKeyData = createSelector(
  [selectSlice],
  (state) => state.formPkeyData,
)

export const selectForms = createSelector([selectSlice], (state) => state.forms)

export const selectListInitData = createSelector(
  [selectSlice],
  (state) => state.listInitData,
)
