/**
 *
 * masters_data
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const masters_data = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const successCB = () => {}

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId="masters_data_filter"
        formId="masters_data"
        list={true}
        showForm={true}
        methods={methods}
        successCB={successCB}
      />
    </FormProvider>
  )
})

export default masters_data
