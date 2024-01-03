/**
 *
 * Create
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const CreateSoapNotice = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const columnUICB = useCallback((args) => {
    return args.valueFormatted
  }, [])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId="post_soap_filter"
        formId="post_rules_soap"
        list={true}
        showForm={true}
        methods={methods}
        columnUICB={columnUICB}
        showSection={true}
        pluginProps={{
          listInitData: {
            post_type: 's',
          },
          addPermission: true,
        }}
      />
    </FormProvider>
  )
})

export default CreateSoapNotice
