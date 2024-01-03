/**
 *
 * Create
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const posts_qlevel_experience = memo(() => {
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
    <div>
      <FormProvider {...methods}>
        <FormBuilder
          filterId="post_filter"
          formId="posts_qlevel_experience"
          list={true}
          showForm={true}
          methods={methods}
          columnUICB={columnUICB}
          showSection={true}
        />
      </FormProvider>
    </div>
  )
})

export default posts_qlevel_experience
