/**
 *
 * Court judgement category
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const courtjudgementcategory = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })
  const onFormChange = () => {}

  const beforeSubmitCB = () => {}

  const successCB = () => {}
  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="courtjudgement_category"
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

export default courtjudgementcategory
