/**
 *
 * exams_schedule
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const exams_schedules = memo(() => {
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
        formId="exams_schedules"
        list={true}
        showForm={true}
        methods={methods}
      />
    </FormProvider>
  )
})

export default exams_schedules
