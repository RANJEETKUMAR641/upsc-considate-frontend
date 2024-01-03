/**
 *
 * Officer
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const Officer = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  return (
    <>
      <FormProvider {...methods}>
        <FormBuilder
          filterId=""
          formId="gatepass_officers"
          list={true}
          showForm={true}
          methods={methods}
        />
      </FormProvider>
    </>
  )
})

export default Officer
export { Officer }
