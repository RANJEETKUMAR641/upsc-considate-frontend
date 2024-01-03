/**
 *
 * Form
 *
 */

import React, { memo, useCallback } from 'react'
import { isEmpty, map, filter, forEach, keys } from 'lodash'
import { SectionDrawer } from 'app/Plugins/FormBuilder/components/sectionDrawer'
import TabCollaps from 'app/components/TabCollaps'

import { useFormBuilderSlice } from '../slice'

import { getDefaultValues } from 'utils/getDefaultValue'
import { Button } from 'react-bootstrap'
import { handleEmptyFieldValue } from 'utils/getValues'
import { getColumns } from 'utils/getTableCols'
import { useSelector } from 'react-redux'
import { selectForms } from '../selectors'

interface Props {
  formId: string
  iconsRightCorner?: React.ReactNode
  methods: any
  handleSubmit: (...args) => void
  splitSize?: any[]
  resizebtn?: React.ReactNode
  fullscreen?: React.ReactNode
  isHavingList?: boolean
  schemaData?: any
  isUA?: boolean
  pluginProps: any
}

// to do shobhit: normal function

export const OTRForm = memo(
  ({
    methods,
    handleSubmit,
    resizebtn,
    fullscreen,
    schemaData,
    isUA,
    pluginProps,
  }: Props) => {
    const getForms = useSelector(selectForms)

    const { formState } = methods

    const { errors } = formState

    const formSections = schemaData?.sections

    const handleReset = useCallback(() => {
      const defaultValue = getDefaultValues(formSections as any)

      methods.reset(defaultValue)

      methods.clearErrors()
    }, [methods, formSections])

    const formTitle = schemaData?.title

    const handleSubmitClick = useCallback(
      (e) => {
        console.log('schema', getForms['otr_form']?.sections?.[0]?.columns?.[2])

        e.preventDefault()
        const values = methods?.getValues()

        console.log('values', values)

        const cols = getColumns(getForms['otr_form'])

        const requiredCols = map(
          filter(cols, ({ required }) => required === 1),
          ({ field }) => field,
        )

        console.log('req col', requiredCols)

        const formEk = handleEmptyFieldValue(requiredCols, values) as any

        const customErrors = keys(methods?.formState?.errors)

        console.log('errors', formEk)
        console.log('form dev errors', customErrors)
        // scroll to error

        if (!isEmpty(formEk)) {
          forEach(formEk, (e) =>
            methods.setError(e, {
              type: 'custom-form-submit',
              message: 'Required',
            }),
          )
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
        if (
          isEmpty(formEk) &&
          values?.confirmPassword !== undefined &&
          isEmpty(customErrors)
        ) {
          delete values.confirmPassword

          handleSubmit(values)
        }
      },
      [methods, getForms, errors],
    )

    return (
      <TabCollaps
        title={formTitle || ''}
        opentab={true}
        tabhandle={false}
        padding={false}
        fullscreen={fullscreen}
        resizebtn={resizebtn}
        data={
          <div className="p-3">
            <form>
              <SectionDrawer
                sections={formSections}
                schema={schemaData}
                fmethods={methods}
                splitSize={[]}
                notShowTitle={true}
                values={methods.getValues()}
                submitProp={handleSubmitClick}
                resetProp={handleReset}
                isUA={isUA}
                pluginProps={pluginProps}
                isPublicForm
              />
              {schemaData && (
                <span
                  id="buttons1"
                  className="d-flex flex-row justify-content-end m-4"
                >
                  <Button
                    className="mt-0 mr-1"
                    color="info"
                    onClick={handleSubmitClick}
                  >
                    Submit
                  </Button>
                </span>
              )}
            </form>
          </div>
        }
      />
    )
  },
)
