/**
 *
 * Create
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const menu_group_permissions = memo(() => {
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
        filterId=""
        formId="menu_group_permissions"
        list={true}
        showForm={true}
        methods={methods}
        successCB={successCB}
      />
    </FormProvider>
  )
})

export default menu_group_permissions
