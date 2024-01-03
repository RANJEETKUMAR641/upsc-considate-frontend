/**
 *
 * assistant-diary-entry
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const RetiredInvigiSourceSans3r = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="vms_retired_invigiSourceSans3r"
        list={false}
        showForm={true}
        methods={methods}
      />
    </FormProvider>
  )
})

export default RetiredInvigiSourceSans3r
