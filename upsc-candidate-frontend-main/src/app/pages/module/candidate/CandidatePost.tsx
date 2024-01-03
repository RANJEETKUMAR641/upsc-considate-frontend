/**
 *
 * CandidatePost
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const CandidatePost = memo((props: any) => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const successCB = () => {}

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId="post_filter"
        formId="post_modules"
        list={true}
        showForm={true}
        methods={methods}
        successCB={successCB}
        pluginProps={{
          initData: props,
        }}
      />
    </FormProvider>
  )
})

export default CandidatePost
