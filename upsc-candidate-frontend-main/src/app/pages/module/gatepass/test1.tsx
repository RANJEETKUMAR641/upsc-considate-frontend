/**
 *
 * demo form
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const Test1Form = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })
  const beforeSubmitCB = () => {}
  const handleOnFormChange = useCallback(() => {
    // if (values?.name !== undefined && values?.name !== '') {
    //   const number = /^[a-zA-Z ]*$/
    //   if (!number.test(values.name)) {
    //     methods.setError('name', { message: 'enter valid name' })
    //   }
    //   if (values?.name?.length < 4) {
    //     methods.setError('name', { message: 'name should be at least 3 char' })
    //   }
    // }
    // if (values?.email !== undefined && values?.email !== '') {
    //   const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z.-]+\.[a-zA-Z]{2,})$/
    //   if (!emailRegex.test(values.email)) {
    //     methods.setError('email', { message: 'enter valid email' })
    //   }
    // }
    // if (values?.phone !== undefined && values?.phone !== '') {
    //   if (values?.phone.length !== 10) {
    //     methods.setError('phone', { message: 'Number must be of 10 Digit' })
    //   }
    // }
    // if (values?.age !== undefined && values?.age !== '') {
    //   methods.setError('age', {max:100, message: 'Number must be of 10 Digit' })
    // }
  }, [])
  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="test1_form"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={handleOnFormChange}
        beforeSubmitCB={beforeSubmitCB}
      />
    </FormProvider>
  )
})

export default Test1Form
