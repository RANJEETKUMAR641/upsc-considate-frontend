/**
 *
 * Officer
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const Subject = memo(() => {
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
          formId="subject_selection"
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

export default Subject
