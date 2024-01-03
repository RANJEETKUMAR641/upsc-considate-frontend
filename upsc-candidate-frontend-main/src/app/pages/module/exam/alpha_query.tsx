/**
 *
 * alpha_query
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const alpha_query = memo(() => {
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
        filterId=""
        formId="alpha_query"
        list={true}
        showForm={false}
        methods={methods}
        pluginProps={{ addPermission: false }}
      />
    </FormProvider>
  )
})

export default alpha_query
