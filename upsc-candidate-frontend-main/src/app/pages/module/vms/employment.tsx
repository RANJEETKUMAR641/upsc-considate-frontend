/**
 *
 * employment-information
 *
 */

import { memo, useCallback } from 'react'
import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const employment = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const handleOnFormChange = useCallback((values) => {
    if (values?.name?.length < 3) {
      methods.setError('name', { message: 'length should be more then 3' })
    }
  }, [])
  const beforeSubmitCB = () => {}

  const successCB = () => {}

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="employmentInfo"
        list={false}
        showForm={true}
        methods={methods}
        onFormChange={handleOnFormChange}
        beforeSubmitCB={beforeSubmitCB}
        successCB={successCB}
      />
    </FormProvider>
  )
})

export default employment
