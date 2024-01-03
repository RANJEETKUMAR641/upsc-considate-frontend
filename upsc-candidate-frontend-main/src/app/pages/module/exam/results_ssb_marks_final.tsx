/**
 *
 * result_ssb_marks_final
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const result_ssb_marks_final = memo(() => {
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
        formId="result_ssb_marks_final"
        list={true}
        showForm={false}
        methods={methods}
        pluginProps={{
          addPermission: false,
        }}
      />
    </FormProvider>
  )
})

export default result_ssb_marks_final
