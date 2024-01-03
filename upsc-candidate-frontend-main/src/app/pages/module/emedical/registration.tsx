/**
 *
 * register
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const register = memo(() => {
  const methods = useForm()

  const onFormChange = () => {}

  const beforeSubmitCB = () => {}

  const successCB = () => {}

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="register"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={onFormChange}
        beforeSubmitCB={beforeSubmitCB}
        successCB={successCB}
      />
    </FormProvider>
  )
})

export default register
export { register }
