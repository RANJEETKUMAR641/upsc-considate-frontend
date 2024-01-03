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
    mode: 'all',
    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const successCB = () => {}

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="custom_notification_templates"
        list={false}
        showForm={true}
        methods={methods}
        successCB={successCB}
      />
    </FormProvider>
  )
})

export default masters_data
