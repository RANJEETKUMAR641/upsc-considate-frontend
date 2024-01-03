/**
 *
 * demo form
 *
 */

import { memo, useCallback } from 'react'

import { FormBuilder } from 'app/Plugins/FormBuilder'
import { useForm, FormProvider } from 'react-hook-form'

const DemoForm = memo(() => {
  const methods = useForm({
    mode: 'onBlur',

    reValidateMode: 'onBlur',

    shouldFocusError: true,
    shouldUseNativeValidation: false,
    criteriaMode: 'firstError',
  })

  const handleOnFormChange = useCallback((values) => {
    if (values.dob !== undefined && values?.d0b !== '') {
      const currentDate = new Date()
      const minBirthYear = currentDate.getFullYear() - 61
      const maxBirthYear = currentDate.getFullYear() - 18
      const dobParts = values.dob.split('/')
      const userDate = new Date(`${dobParts[2]}-${dobParts[1]}-${dobParts[0]}`)
      const userBirthYear = userDate.getFullYear()
      if (userBirthYear < minBirthYear) {
        methods.setError('dob', {
          message: 'You must be at least 61 years old.',
        })
      }
      if (userBirthYear > maxBirthYear) {
        methods.setError('dob', {
          message: 'You must be at most 18 years old.',
        })
      }
    }

    if (values?.name !== undefined && values?.name !== '') {
      if (values?.name?.length < 3) {
        methods.setError('name', { message: 'name should be at least 3 char' })
        // methods.setValue('city', "Noida")
      }
    }

    if (
      values.name !== undefined &&
      values.name !== '' &&
      values.city !== undefined &&
      values.city !== ''
    ) {
      if (values.name[0] !== values.city[0]) {
        methods.setError('city', {
          message: `city should be start from ${values.name[0]} letter`,
        })
      }
    }
  }, [])

  return (
    <FormProvider {...methods}>
      <FormBuilder
        filterId=""
        formId="demo_form"
        list={true}
        showForm={true}
        methods={methods}
        onFormChange={handleOnFormChange}
      />
    </FormProvider>
  )
})

export default DemoForm
