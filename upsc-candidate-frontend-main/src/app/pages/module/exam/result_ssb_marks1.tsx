/**
 *
 * esult_ssb_marks1
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const esult_ssb_marks1 = memo(() => {
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
        filterId="exam_year_rollno_filter"
        formId="result_ssb_marks1"
        list={true}
        showForm={true}
        methods={methods}
        pluginProps={{
          addPermission: false,
        }}
      />
    </FormProvider>
  )
})

export default esult_ssb_marks1
