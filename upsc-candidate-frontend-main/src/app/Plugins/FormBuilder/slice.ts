import { PayloadAction } from '@reduxjs/toolkit'

import { createSlice } from 'utils/@reduxjs/toolkit'
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors'
import { getValues } from 'utils/getValues'

import { formBuilderSaga } from './saga'
import { FormBuilderState } from './types'

export const initialState: FormBuilderState = {
  initData: {},
  formPayload: {},
  tableData: {},
  forms: {},
  listInitData: {},
}

const slice = createSlice({
  name: 'formBuilder',
  initialState,
  reducers: {
    setInitData(state, action: PayloadAction<any>) {
      state.initData = action.payload
      state.listInitData = action.payload
    },
    setFormData(state, action) {
      state.forms = action.payload
    },
    setFormPayload(state, action: PayloadAction<any>) {
      state.formPayload = getValues(action.payload)
    },
    defaultState(state) {
      state.formPayload = {}
      state.initData = {}
      state.listInitData = {}
      state.tableData = {}
    },
    setTableData(state, action: PayloadAction<any>) {
      state.tableData = action.payload
    },
  },
})

export const { actions: formBuilderActions } = slice

export const useFormBuilderSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer })
  useInjectSaga({ key: slice.name, saga: formBuilderSaga })
  return { actions: slice.actions }
}

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useFormBuilderSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
