/**
 *
 * Create
 */

import { memo } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const post_notices = memo(() => {
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
        filterId="post_filter"
        formId="post_rules_ora"
        list={true}
        showForm={true}
        methods={methods}
        pluginProps={{
          onEditPKeysDisabled: true,
          addPermission: true,
        }}
      />
    </FormProvider>
  )
})

export default post_notices
export { post_notices }
