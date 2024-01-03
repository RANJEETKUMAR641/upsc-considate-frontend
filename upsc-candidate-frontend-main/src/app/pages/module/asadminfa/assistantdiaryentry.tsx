import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const Assistantdiaryentry = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const onFormChange = useCallback((values) => {
    if (values?.name !== undefined && values?.name !== '') {
      if (values.name.length < 3) {
        methods.setError('name', {
          message: 'Name & Designation contains atleast 3 characters',
        })
      }
    }
    if (values?.patient_name !== undefined && values?.patient_name !== '') {
      const pattern = /^[A-Za-z\s]+$/
      if (values.patient_name.length < 3) {
        methods.setError('patient_name', {
          message: 'Patient Name contains atleast 3 characters',
        })
      }
      if (!pattern.test(values.patient_name)) {
        methods.setError('patient_name', {
          message: 'Patient Name should contain only alphabetic characters',
        })
      }
    }
    if (
      values?.nature_of_treatment !== undefined &&
      values?.nature_of_treatment !== ''
    ) {
      if (values.nature_of_treatment.length < 3) {
        methods.setError('nature_of_treatment', {
          message: 'Nature Of Treatment contains atleast 3 characters',
        })
      }
    }
    if (
      values.from_start !== undefined &&
      values.to_end !== undefined &&
      values?.from_start !== '' &&
      values?.to_end !== ''
    ) {
      if (values.from_start > values.to_end) {
        methods.setError('to_end', {
          message: 'To End Date must be greater than From Start Date',
        })
      }
    }
  }, [])

  const beforeSubmitCB = () => {}

  const successCB = () => {}

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="assistant_diary_entry"
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

export default Assistantdiaryentry
