/**
 *
 * pm_custom_template
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const pm_custom_template = memo(() => {
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
        filterId="pm_custom_template_filter"
        formId="pm_custom_template"
        list={true}
        showForm={true}
        methods={methods}
        successCB={successCB}
      />
    </FormProvider>
  )
})

export default pm_custom_template
