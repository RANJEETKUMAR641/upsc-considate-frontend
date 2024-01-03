/* eslint-disable */

/**
 *
 * Form
 *
 */
import React, { memo, useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'
import moment from 'moment'
import {
  size,
  includes,
  toString,
  isEmpty,
  uniq,
  concat,
  get,
  keys,
  filter,
  map,
} from 'lodash'
import { useFormContext } from 'react-hook-form'
import { SectionDrawer } from 'app/Plugins/FormBuilder/components/sectionDrawer'
import TabCollaps from 'app/components/TabCollaps'
import { getDefaultValues, getFormValuesPayload } from 'utils/getDefaultValue'
// import { requestPayload } from 'utils/requestPayload'
import { selectForms, selectInitData, selectTableData } from '../selectors'
import { getColumns } from 'utils/getTableCols'
import { handleEmptyFieldValue } from 'utils/getValues'
interface Props {
  formId?: string
  iconsRightCorner?: React.ReactNode
  methods: any
  handleSubmit: (...args) => void
  resizebtn?: React.ReactNode
  fullscreen?: React.ReactNode
  isHavingList?: boolean
  secondaryPaneSize?: Number
  upsertSuccess?: Object
  showSection?: boolean
  disabled: boolean
  onPKeysChange: any
  filterId?: string
  getHeight?: any
  formData?: any
  isFilter?: boolean
  isLoading?: any
  isFilterForm?: boolean
  beforeSubmitCB?: (...args) => void
  pluginProps: any
  res: any
  schemaData?: any
  rowData?: any
}
export const Form = memo(
  ({
    getHeight,
    formId,
    methods,
    handleSubmit,
    secondaryPaneSize = 0,
    resizebtn,
    fullscreen,
    showSection,
    disabled,
    filterId = '',
    formData = {},
    isFilterForm = false,
    pluginProps,
    res,
    schemaData,
    rowData = {},
  }: Props) => {
    const {
      setValue,
      trigger,
      getValues: getFormContextValues,
    } = useFormContext()
    const getInitData = useSelector(selectInitData)
    const getTableData = useSelector(selectTableData)
    const sechemaFormId: string = (
      !isEmpty(filterId) ? filterId : formId
    ) as string
    const getForms = useSelector(selectForms)
    // helper fn to get form section
    const schemas = !isEmpty(schemaData)
      ? schemaData
      : getForms?.[sechemaFormId]?.schema
    // const PKeysPayload = getPKeys(getColumns(schemas), schemas, values, methods)
    const formTitle = getForms?.[sechemaFormId]?.schema?.title
    // set form data with help of setValue react hook form
    useEffect(() => {
      const formValues = formData?.[0]
      // TODO fix date / datetime on based of schema
      if (size(formValues) > 0) {
        for (const [key, value] of Object.entries(formValues)) {
          const valueS = includes(toString(value), 'T00')
            ? moment(toString(value)).format('DD-MM-YYYY')
            : value
          setValue(key, valueS)
        }
      }
    }, [formData, setValue])
    // valid pkeys get call form data
    useEffect(() => {
      //TODO: need to add data on pKeys
      // if (size(PKeysPayload) > 0 && !isEmpty(formId) && isEmpty(filterId)) {
      //   const payload = {
      //     action: 'get',
      //     formId: formId,
      //     initData: JSON.stringify(getInitData),
      //     data: JSON.stringify(PKeysPayload),
      //   }
      //   onPKeysChange(payload)
      //   setTimeout(() => {
      //     requestPayload(payload, '/api/formio').then((res) => {
      //       if (!isEmpty(get(res, 'data.[0]', []))) {
      //         const formValues = get(res, 'data.[0]')
      //         if (size(formValues) > 0) {
      //           for (const [key, value] of Object.entries(formValues)) {
      //             const valueS = includes(toString(value), 'T00')
      //               ? moment(toString(value)).format('DD-MM-YYYY')
      //               : value
      //             setValue(key, valueS)
      //           }
      //         }
      //       }
      //     })
      //   }, 500)
      // }
    }, [filterId, formId])

    const handleReset = useCallback(() => {
      const currentFormId: string = (isFilterForm ? filterId : formId) as string
      const formSections = getForms?.[currentFormId]?.schema?.sections
      const defaultValue = getDefaultValues(formSections as any)
      methods.reset(defaultValue)
    }, [methods, schemas, formId])

    const handleSubmitClick = useCallback(
      (e) => {
        e.preventDefault()
        const values = methods?.getValues() || getFormContextValues()

        console.log('values', values)

        const currentFormId: string = (
          isFilterForm ? filterId : formId
        ) as string

        const cols = getColumns(getForms?.[currentFormId]?.schema)

        const requiredCols = map(
          filter(cols, ({ required }) => required === 1),
          ({ field }) => field,
        )

        console.log('req col', requiredCols)

        const formEk = handleEmptyFieldValue(requiredCols, values)

        const customErrors = keys(methods?.formState?.errors)

        console.log('errors', formEk)
        console.log('form dev errors', customErrors)
        // scroll to error

        if (!isEmpty(formEk)) {
          if (formEk?.length > 0) {
            const section = document.getElementById(`my-colId-${formEk?.[0]}`)

            if (section) {
              const sectionTop = section.offsetTop
              window.scrollTo({
                top: sectionTop - 30,
                behavior: 'smooth',
              })
            }
          }
        }

        if (isEmpty(formEk) && !isFilterForm && isEmpty(customErrors)) {
          handleSubmit(values, getInitData, getTableData)
        }

        if (isFilterForm && !isEmpty(values)) {
          handleSubmit(values, getInitData, getTableData)
        }
      },
      [
        methods,
        getForms,
        isFilterForm,
        formId,
        filterId,
        handleReset,
        getInitData,
        getTableData,
      ],
    )
    return (
      <div id={`${!isEmpty(filterId) ? 'filter_form' : `${formId}_form`}`}>
        <TabCollaps
          title={formTitle || ''}
          opentab={true}
          tabhandle={false}
          padding={false}
          fullscreen={fullscreen}
          resizebtn={resizebtn}
          data={
            <div style={{ height: `${(getHeight as any) - 27}px` }}>
              <form>
                <SectionDrawer
                  disabled={disabled}
                  sections={schemas?.sections}
                  schema={schemas}
                  fmethods={methods}
                  secondaryPaneSize={secondaryPaneSize}
                  showSection={showSection}
                  values={methods?.getValues()}
                  submitProp={async (e) => {
                    await trigger()
                    await handleSubmitClick(e)
                  }}
                  resetProp={handleReset}
                  formId={formId}
                  pluginProps={pluginProps}
                  resValue={res}
                  rowData={rowData}
                />
              </form>
            </div>
          }
        />
      </div>
    )
  },
)
