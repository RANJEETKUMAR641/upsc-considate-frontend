/**
 *
 * assistant-diary-entry
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const CoordinatorDetails = memo(() => {
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
        formId="vms_co-rd_supervisor"
        list={false}
        showForm={true}
        methods={methods}
      />
    </FormProvider>
  )
})

export default CoordinatorDetails
