/**
 *
 * Create
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const post_ora_rules = memo(() => {
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
        filterId="post_ora_filter"
        formId="post_rules_ora"
        list={true}
        showForm={true}
        methods={methods}
        columnUICB={columnUICB}
        showSection={true}
        pluginProps={{
          listInitData: {
            post_type: 'o',
          },
          addPermission: true,
        }}
      />
    </FormProvider>
  )
})

export default post_ora_rules
