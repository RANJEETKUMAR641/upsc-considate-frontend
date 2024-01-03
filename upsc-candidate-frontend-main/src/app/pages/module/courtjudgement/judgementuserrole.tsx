/**
 *
 * Court judgement User Role
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const createJudgementuserrole = memo(() => {
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
        formId="courtjudgement_user_role"
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

export default createJudgementuserrole
