/**
 *
 * assistant-diary-entry
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const AddExam = memo(() => {
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
        filterId="exam_year_filter"
        formId="vms_create_exam"
        list={false}
        showForm={true}
        methods={methods}
      />
    </FormProvider>
  )
})

export default AddExam
