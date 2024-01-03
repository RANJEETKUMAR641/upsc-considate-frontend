/**
 *
 * Officer
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder/'
import { useForm, FormProvider } from 'react-hook-form'

const Testing = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })
  const beforeSubmitCB = () => {}

  const handleOnFormChange = useCallback(() => {
    // if (values.dob !== undefined && values?.d0b !== '') {
    //   const currentDate = new Date()
    //   const minBirthYear = currentDate.getFullYear() - 61
    //   const maxBirthYear = currentDate.getFullYear() - 18
    //   const dobParts = values.dob.split('/')
    //   const userDate = new Date(`${dobParts[2]}-${dobParts[1]}-${dobParts[0]}`)
    //   const userBirthYear = userDate.getFullYear()
    //   if (userBirthYear < minBirthYear) {
    //     methods.setError('dob', {
    //       message: 'You must be at least 61 years old.',
    //     })
    //   }
    //   if (userBirthYear > maxBirthYear) {
    //     methods.setError('dob', {
    //       message: 'You must be at most 18 years old.',
    //     })
    //   }
    // }
    // if (values?.upload !== undefined && values?.upload !== '') {
    //   if (values.upload.size < 50000) {
    //     methods.setError('upload', {
    //       message: 'file must be greater than 50kb',
    //     })
    //   }
    //   if (values.upload.size > 2000000) {
    //     methods.setError('upload', {
    //       message: 'file must be greater than 50kb',
    //     })
    //   }
    // }
    // if (values?.pin_code !== undefined && values?.pin_code !== '') {
    //   if (values.pin_code.length < 6) {
    //     methods.setError('pin_code', {
    //       message: 'Pin code should be of 6 digit',
    //     })
    //   }
    //   if (values.pin_code.length > 6) {
    //     methods.setError('pin_code', {
    //       message: 'Pin code should be of 6 digit',
    //     })
    //   }
    // }
    // if (values?.age !== undefined && values?.age !== '') {
    //   if (values.age < 100) {
    //     methods.setError('age', { message: 'Age should be above 18 years' })
    //   }
    //   if (values.age > 100) {
    //     methods.setError('age', { message: 'Age should be less than 60 years' })
    //   }
    // }
    // if (values?.name !== undefined && values?.name !== '') {
    //   const pattern = /[A-Za-z]$/
    //   const number = /[A-Za-z]{4}$/
    //   if (!number.test(values.name)) {
    //     methods.setError('name', { message: 'name should be at least 3 char' })
    //   }
    //   if (!pattern.test(values.name)) {
    //     methods.setError('name', { message: 'name should be in word' })
    //   }
    // }
    // if (values?.phone_number !== undefined && values?.phone_number !== '') {
    //   const number = /[0-9]{10}$/s
    //   if (values?.phone_number.startsWith(0)) {
    //     methods.setError('phone_number', {
    //       message: 'Invalid number',
    //     })
    //   } else if (
    //     !number.test(values.phone_number) ||
    //     values.phone_number.length > 10
    //   ) {
    //     methods.setError('phone_number', {
    //       message: 'number should be 10 digit',
    //     })
    //   } else if (
    //     !number.test(values.phone_number) ||
    //     values.phone_number.length < 10
    //   ) {
    //     methods.setError('phone_number', {
    //       message: 'number should be 10 digit',
    //     })
    //   }
    // }
  }, [])
  return (
    <>
      <FormProvider {...methods}>
        <FormBuilder
          filterId=""
          formId="testing"
          list={true}
          showForm={true}
          methods={methods}
          onFormChange={handleOnFormChange}
          beforeSubmitCB={beforeSubmitCB}
        />
      </FormProvider>
    </>
  )
})

export default Testing
