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
  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId="my_forms_filter"
        formId="my_forms_columns"
        list={true}
        showForm={true}
        methods={methods}
      />
    </FormProvider>
  )
})

export default CreateFormColumn
