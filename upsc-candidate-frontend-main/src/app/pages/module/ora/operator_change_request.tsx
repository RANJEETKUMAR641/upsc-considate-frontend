/**
 *
 * demo form
 *
 */

import { memo } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const CreateFormColumn = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  // registation id form based readonly -> otr_main
  // image view
  // operator -> otr_main

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="operator_change_request"
        list={true}
        showForm={true}
        methods={methods}
        pluginProps={{ addPermission: false }}
      />
    </FormProvider>
  )
})

export default CreateFormColumn
