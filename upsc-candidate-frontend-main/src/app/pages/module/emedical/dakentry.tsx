/**
 *
 * dak-entry
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const Dakentry = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const onFormChange = useCallback((values) => {
    const AlphabetPattern = /^[A-Za-z\s]+$/
    if (values?.name !== undefined && values?.name !== '') {
      if (values.name.length < 3) {
        methods.setError('name', {
          message: 'Name & Designation contains atleast 3 characters',
        })
      } else if (!AlphabetPattern.test(values.name)) {
        methods.setError('name', {
          message:
            'Name & Designation should contain only alphabetic characters',
        })
      }
    }
  }, [])

  const beforeSubmitCB = useCallback(() => {}, [])

  const successCB = useCallback(() => {}, [])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="dak_entry"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={onFormChange}
        beforeSubmitCB={beforeSubmitCB}
        successCB={successCB}
      />
    </FormProvider>
  )
})

export default Dakentry
export { Dakentry }
