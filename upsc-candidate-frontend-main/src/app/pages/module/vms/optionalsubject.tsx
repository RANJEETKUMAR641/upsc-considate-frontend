/**
 *
 * Officer
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const Optional = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })
  const beforeSubmitCB = () => {}

  const handleOnFormChange = useCallback(() => {}, [])
  return (
    <>
      <FormProvider {...methods}>
        <FormBuilder
          filterId=""
          formId="optional_subject"
          list={false}
          showForm={true}
          methods={methods}
          onFormChange={handleOnFormChange}
          beforeSubmitCB={beforeSubmitCB}
        />
      </FormProvider>
    </>
  )
})

export default Optional
