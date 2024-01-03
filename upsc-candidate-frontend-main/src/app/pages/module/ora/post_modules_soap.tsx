/**
 *
 * PostModules
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const PostModulesSoap = memo(() => {
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
        filterId="post_soap_filter"
        formId="post_modules_soap"
        showForm={true}
        list={true}
        methods={methods}
      />
    </FormProvider>
  )
})

export default PostModulesSoap
