/**
 *
 * demo form
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const Inspectingteam = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const handleOnFormChange = useCallback((values) => {
    if (values?.name !== undefined || values?.name !== '') {
      const number = /^[a-zA-Z ]*$/
      if (!number.test(values.name)) {
        methods.setError('name', { message: 'name should be at least 3 char' })
        // methods.setValue('city', "Noida")
      }
      if (!number.test(values.name)) {
        methods.setError('name', { message: 'name should be at least 3 char' })
      }
    }
  }, [])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="inspectingteam"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={handleOnFormChange}
      />
    </FormProvider>
  )
})

export default Inspectingteam
