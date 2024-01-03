/**
 *
 * Appointment-Calendar
 *
 */

import { memo, useCallback } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const Unavailable = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const onFormChange = useCallback(() => {}, [])

  const beforeSubmitCB = useCallback(() => {}, [])

  const successCB = useCallback(() => {}, [])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="unavailable"
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

export default Unavailable
