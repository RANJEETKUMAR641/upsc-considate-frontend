/*
 *
 * FormBuilder
 *
 */

import { useCallback, useEffect } from 'react'
import { UseFormProps } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { isEmpty, includes, map, size, toString } from 'lodash'
import moment from 'moment'

// plugin components
import { Form } from 'app/Plugins/FormBuilder/components/Form'
import { SplitterListForm } from 'app/Plugins/FormBuilder/components/SplitterListForm'

import { Box } from '@mui/material'
import { handleDNoneCols } from 'utils/getValues'
import { getColumns } from 'utils/getTableCols'
import { OverlayLoader } from 'app/components/OverlayLoader'

import { useFormBuilderSlice } from './slice'
import {
  selectInitData,
  selectForms,
  selectTableData,
  selectListInitData,
} from './selectors'

import { useAxios, axiosAction } from '../Mutations/useAxios'
import { OTRForm } from './components/otr'

type FormBuilderProps = {
  filterId: string
  formId: string
  list: boolean
  showForm: boolean
  methods?: UseFormProps | any
  successCB?: (...args) => void
  beforeSubmitCB?: (...args) => void
  columnUICB?: (...args) => React.ReactNode
  iconsRightCorner?: React.ReactNode
  onFormChange?: (...args) => void
  isPublicForm?: boolean
  showSection?: boolean
  updateSchema?: (...args) => void
  disabled?: boolean
  title?: string
  gridData?: [] | any
  schemaData?: [] | any
  initData?: any
  schemas?: any
  addPermission?: boolean
  basicFilter?: any
  pluginProps?: any
  handleChangeSchema?: (...args) => void
}

export function FormBuilder({
  filterId = '',
  formId,
  list,
  methods,
  successCB = () => {},
  handleChangeSchema = () => {},
  columnUICB = (args) => args.valueFormatted,
  beforeSubmitCB = () => {
    return { rc: false, data: [] }
  },
  showForm,
  iconsRightCorner,
  onFormChange = () => {},
  isPublicForm = false,
  disabled = false,
  gridData,
  schemaData = {},
  pluginProps = {
    isActive: false,
    addPermission: true,
    handleChangeData: () => {},
  },
}: FormBuilderProps) {
  const { actions } = useFormBuilderSlice()
  const getInitData = useSelector(selectInitData)
  const getListInitData = useSelector(selectListInitData)
  const getTableData = useSelector(selectTableData)

  const getForms = useSelector(selectForms)

  const { setValue, reset } = methods

  const {
    mutate: getFilterData,
    res: filterRes,
    isLoading: filterSchemaLoading,
  } = useAxios({
    action: axiosAction.SCHEMA,
    url: '/api/formio',
  })

  const {
    mutate: formMutate,
    res: formRes,
    isLoading: formLoading,
  } = useAxios({ action: axiosAction.SCHEMA, url: '/api/formio' })

  const {
    mutate: listMutate,
    res: listRes,
    isLoading: listLoading,
  } = useAxios({
    action: axiosAction.LIST,
    url: '/api/formio',
    headers: { 'Content-Type': 'application/json' },
  })

  const { mutate: formDataMutate, res: formDataRes } = useAxios({
    action: axiosAction.GET,
    url: '/api/formio',
  })

  const { mutate: formRowDataMutate, res: formRowDataRes } = useAxios({
    action: axiosAction.GET,
    url: '/api/formio',
  })

  const { mutate: formUpsert, res: updateRes } = useAxios({
    action: axiosAction.UPSERT,
    url: '/api/formio',
    headers: { 'Content-Type': 'multipart/form-data; boundary' },
  })

  useEffect(() => {
    if (!isEmpty(filterId) && !isPublicForm && isEmpty(schemaData)) {
      getFilterData({
        formId: filterId,
        data: {},
        initData: {},
      } as any)
      dispatch(actions.defaultState())
    }
  }, [filterId])

  useEffect(() => {
    if (
      !isEmpty(getInitData) &&
      !isEmpty(formId) &&
      !isPublicForm &&
      isEmpty(schemaData)
    ) {
      formMutate({
        formId: formId,
        data: {},
        initData: getInitData,
      } as any)
    }

    if (!isEmpty(formId) && !isPublicForm) {
      formDataMutate({
        formId: formId,
        data: {},
        initData: getInitData,
      } as any)
    }
  }, [formId, getInitData, list])

  useEffect(() => {
    if (list && !isEmpty(formId) && !isPublicForm) {
      listMutate({
        formId: formId,
        data: {},
        initData: getListInitData,
      } as any)
    }
  }, [formId, list, getListInitData])

  useEffect(() => {
    if (isEmpty(getInitData) && !isEmpty(formId) && !isPublicForm) {
      formMutate({
        formId: formId,
        data: {},
        initData: {},
      } as any)
    }
  }, [formId, list, isPublicForm])

  useEffect(() => {
    if (pluginProps?.initData) {
      dispatch(actions.setInitData(pluginProps?.initData))
    }
  }, [])

  const values = methods?.watch()

  useEffect(() => {
    if (values) {
      const schemas = getForms?.[formId]?.schema
      const rawSchema = getForms?.[formId]?.rawSchema
      // to do need to change name
      onFormChange(values, { ...schemas, orgSchema: rawSchema })
    }
  }, [values, getForms])

  useEffect(() => {
    const filterPayload = {
      [filterId]: {
        schema: filterRes?.[0],
        rawSchema: filterRes?.[0],
        pKeys: filterRes?.[0]?.pkeys?.split(','),
        pKeyId: filterRes?.[0].pkeyId,
        columns: map(getColumns(filterRes?.[0], filterId), (col) => col?.field),
      },
    }
    const formsPayload = { ...getForms, ...filterPayload }
    dispatch(actions.setFormData(formsPayload))
  }, [filterRes, filterId])

  // // set Form Schema in redux
  useEffect(() => {
    if (isEmpty(schemaData)) {
      const formPayload = {
        [formId]: {
          schema: handleDNoneCols(formRes?.[0]),
          rawSchema: formRes?.[0],
          pKeys: formRes?.[0]?.pkeys?.split(','),
          pKeyId: formRes?.[0]?.pkeyid,
          columns: map(getColumns(formRes?.[0]), (col) => col?.field),
        },
      }

      const formsPayload = { ...getForms, ...formPayload }
      dispatch(actions.setFormData(formsPayload))
    }

    if (!isEmpty(schemaData)) {
      const formPayload = {
        [formId]: schemaData,
      }

      const formsPayload = { ...getForms, ...formPayload }

      dispatch(actions.setFormData(formsPayload))
    }
  }, [formRes, formId, schemaData])

  useEffect(() => {
    if (size(formDataRes?.[0]) > 0) {
      for (const [key, value] of Object.entries(formDataRes?.[0])) {
        // to do shobhit : need to check with schema
        const valueS = includes(toString(value), 'T00')
          ? moment(toString(value)).format('DD-MM-YYYY')
          : value
        setValue(key, toString(valueS), { shouldTouch: true })
      }
    }
  }, [formDataRes])

  useEffect(() => {
    if (size(formRowDataRes?.[0]) > 0) {
      for (const [key, value] of Object.entries(formRowDataRes?.[0])) {
        // to do shobhit : need to check with schema
        const valueS = includes(toString(value), 'T00')
          ? moment(toString(value)).format('DD-MM-YYYY')
          : value

        setValue(key, toString(valueS), { shouldTouch: true })
      }
    }
  }, [formRowDataRes])

  useEffect(() => {
    if (updateRes) {
      successCB(updateRes)
      reset(undefined, {
        keepValues: true,
        keepDirty: false,
        keepDefaultValues: false,
      })

      if (!isEmpty(formId) && list && !isPublicForm) {
        listMutate({
          formId: formId,
          data: {},
          initData: getListInitData,
        } as any)
      }

      if (!isEmpty(formId) && !list && !isPublicForm) {
        formDataMutate({
          formId: formId,
          data: {},
          initData: getInitData,
        } as any)
      }
    }
  }, [
    updateRes,
    formId,
    getInitData,
    list,
    isPublicForm,
    getListInitData,
    reset,
  ])

  // redux methods

  const dispatch = useDispatch()

  useEffect(() => {
    handleChangeSchema(actions, dispatch)
  }, [handleChangeSchema])

  const handleFilterFormSubmit = useCallback((formValues) => {
    let initDataPayload = { ...formValues, ...pluginProps?.listInitData }

    const bsRes: any = beforeSubmitCB(initDataPayload)

    if (bsRes?.res) {
      initDataPayload = Object.assign(
        initDataPayload,
        { ...bsRes.data },
        { ...pluginProps?.listInitData },
      )
    }

    dispatch(actions.setInitData(initDataPayload))
  }, [])

  const handleFormSubmit = useCallback(
    (formValues) => {
      formUpsert({
        formId: formId,
        data: formValues,
        initData: { ...getInitData, ...getTableData },
      } as any)
    },
    [formId, getInitData, getTableData, pluginProps],
  )

  const onPKeysChange = () => {}

  const upsertSuccess = {}

  const getFormDataOnRow = useCallback(
    (payload) => {
      formRowDataMutate({
        formId: formId,
        data: payload,
        initData: getInitData,
      } as any)
      dispatch(actions.setTableData(payload))
    },
    [getInitData],
  )

  if (filterSchemaLoading) {
    return (
      <OverlayLoader
        open
        className={`${
          !isEmpty(filterId) ? 'filter_form_loader' : `${formId}_form_loader`
        }`}
      />
    )
  }

  return (
    <div style={{ position: 'relative' }}>
      {!isEmpty(filterId) && (
        <Box className="">
          <Form
            filterId={filterId}
            methods={methods}
            handleSubmit={handleFilterFormSubmit}
            upsertSuccess={upsertSuccess}
            onPKeysChange={onPKeysChange}
            beforeSubmitCB={beforeSubmitCB}
            showSection={false}
            disabled={false}
            isFilter={true}
            isLoading={false}
            isFilterForm={true}
            pluginProps={pluginProps}
            res={formDataRes?.[0]}
            schemaData={schemaData}
          />
        </Box>
      )}

      {!isEmpty(getInitData) && !isEmpty(filterId) && showForm && !list && (
        <Form
          disabled={disabled}
          formId={formId}
          methods={methods}
          handleSubmit={handleFormSubmit}
          onPKeysChange={onPKeysChange}
          showSection={false}
          pluginProps={pluginProps}
          res={formDataRes?.[0]}
          schemaData={schemaData}
        />
      )}
      {isEmpty(getInitData) &&
        isEmpty(filterId) &&
        showForm &&
        !list &&
        !isPublicForm && (
          <Form
            disabled={disabled}
            formId={formId}
            methods={methods}
            handleSubmit={handleFormSubmit}
            upsertSuccess={upsertSuccess}
            onPKeysChange={onPKeysChange}
            pluginProps={pluginProps}
            res={formDataRes?.[0]}
            schemaData={schemaData}
          />
        )}

      {!isEmpty(getInitData) &&
        isEmpty(filterId) &&
        showForm &&
        !list &&
        !isPublicForm && (
          <Form
            disabled={disabled}
            formId={formId}
            methods={methods}
            handleSubmit={handleFormSubmit}
            upsertSuccess={upsertSuccess}
            onPKeysChange={onPKeysChange}
            pluginProps={pluginProps}
            res={formDataRes?.[0]}
            schemaData={schemaData}
          />
        )}
      {!isEmpty(getInitData) && showForm && list && (
        <SplitterListForm
          formId={formId}
          methods={methods}
          handleSubmit={handleFormSubmit}
          columnUICB={columnUICB}
          gridData={gridData}
          schemaData={schemaData}
          upsertSuccess={upsertSuccess}
          iconsRightCorner={iconsRightCorner}
          disabled={disabled}
          isFormLoading={formLoading}
          isListLoading={listLoading}
          listRes={listRes}
          notShowForm={true}
          getFormDataOnRow={getFormDataOnRow}
          listMutate={listMutate}
          pluginProps={pluginProps}
          updateRes={updateRes}
          formRowDataRes={formRowDataRes}
        />
      )}

      {isEmpty(getInitData) && isEmpty(filterId) && showForm && list && (
        <SplitterListForm
          formId={formId}
          methods={methods}
          handleSubmit={handleFormSubmit}
          columnUICB={columnUICB}
          upsertSuccess={upsertSuccess}
          iconsRightCorner={iconsRightCorner}
          disabled={disabled}
          onPKeysChange={onPKeysChange}
          gridData={gridData}
          schemaData={schemaData}
          isFormLoading={formLoading}
          isListLoading={listLoading}
          notShowForm={true}
          listRes={listRes}
          getFormDataOnRow={getFormDataOnRow}
          listMutate={listMutate}
          pluginProps={pluginProps}
          updateRes={updateRes}
          formRowDataRes={formRowDataRes}
        />
      )}

      {isPublicForm && (
        <OTRForm
          formId={formId}
          methods={methods}
          handleSubmit={handleFormSubmit}
          schemaData={schemaData}
          isUA
          pluginProps={pluginProps}
        />
      )}

      {isEmpty(filterId) && list && !showForm && (
        <SplitterListForm
          formId={formId}
          methods={methods}
          handleSubmit={handleFormSubmit}
          columnUICB={columnUICB}
          upsertSuccess={upsertSuccess}
          iconsRightCorner={iconsRightCorner}
          disabled={disabled}
          onPKeysChange={onPKeysChange}
          gridData={gridData}
          schemaData={schemaData}
          isFormLoading={false}
          isListLoading={listLoading}
          listRes={listRes}
          getFormDataOnRow={() => {}}
          listMutate={listMutate}
          notShowForm={false}
          pluginProps={pluginProps}
          updateRes={updateRes}
          formRowDataRes={formRowDataRes}
        />
      )}

      {!isEmpty(getInitData) && list && !showForm && (
        <SplitterListForm
          formId={formId}
          methods={methods}
          handleSubmit={handleFormSubmit}
          columnUICB={columnUICB}
          upsertSuccess={upsertSuccess}
          iconsRightCorner={iconsRightCorner}
          disabled={disabled}
          onPKeysChange={onPKeysChange}
          gridData={gridData}
          schemaData={schemaData}
          isFormLoading={false}
          isListLoading={listLoading}
          listRes={listRes}
          getFormDataOnRow={() => {}}
          listMutate={listMutate}
          notShowForm={false}
          pluginProps={pluginProps}
          updateRes={updateRes}
          formRowDataRes={formRowDataRes}
        />
      )}
    </div>
  )
}
