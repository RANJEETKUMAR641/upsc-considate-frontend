/**
 *
 * pm_custom
 *
 */

import { memo } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const pm_custom = memo(() => {
  // const pm_custom = memo(() => {
  //   const useHandleChangeCb = (event) => {
  //     delete event?.data?.values
  //     event = Object.assign(event, { ...event.data, custom: 'Y' })
  //
  //   const handleBeforeSubmit = (data) => {
  //     return { rc: true, data: Object.assign(data, {                                                         'Y' }) }
  //   }

  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const successCB = () => {}

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="pm_custom"
        list={true}
        showForm={true}
        methods={methods}
        successCB={successCB}
        basicFilter={{ custom: 'Y' }}
      />
    </FormProvider>
  )
})

export default pm_custom
