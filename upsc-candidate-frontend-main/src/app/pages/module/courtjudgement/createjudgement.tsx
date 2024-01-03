/**
 *
 * Create judgement
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const createnewjudgement = memo(() => {
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
        formId="create_new_judgement"
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

export default createnewjudgement
