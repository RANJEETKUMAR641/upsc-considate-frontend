/**
 *
 * Create
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const ora_post_notices_approval = memo(() => {
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
        filterId="postnotices_filter"
        formId="post_notices_approval"
        list={true}
        showForm={true}
        methods={methods}
        columnUICB={columnUICB}
        showSection={true}
        pluginProps={{
          listInitData: {
            notice_type: 'o',
          },
          addPermission: false,
        }}
      />
    </FormProvider>
  )
})

export default ora_post_notices_approval
